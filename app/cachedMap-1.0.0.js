portalApp.
factory('mapCache', ['$cacheFactory', function ($cacheFactory) {
    return $cacheFactory('portalApp.map.mapElementKey');
}]).
directive('cachedMap', ['mapCache', 'GoogleMapApi'.ns(), function (mapCache, GoogleMapApi) {
    return {
        restrict: 'E',
        transclude: true,
        template: '<div class="angular-google-map-container"><div style="display:none;" ng-transclude></div></div>',
        controller: function ($scope) { },
        link: function (scope, element, attr) {
            GoogleMapApi.then(function (maps) {
                scope.$watch(attr.mapOptions, function (newValue) {
                    var mapElement = $('<div style="height: 100%;"></div>');
                    element.find('.angular-google-map-container').append(mapElement);

                    var options = {
                        'zoom': newValue.mapData.zoom,
                        'center': new maps.LatLng(newValue.mapData.center.latitude, newValue.mapData.center.longitude),
                        'mapTypeId': maps.MapTypeId.ROADMAP
                    };
                    var map = new maps.Map(mapElement.get(0), options);


                    var debouncedEventHandler = function (f, wait) {
                        return _.partial(_.debounce(f, wait), map);
                    }

                    maps.event.addListener(map, 'dragend', debouncedEventHandler(newValue.events.dragend, 750));
                    maps.event.addListener(map, 'zoom_changed', debouncedEventHandler(newValue.events.zoom_changed, 750));
                    maps.event.addListener(map, 'center_changed', debouncedEventHandler(newValue.events.center_changed || function () { }, 750));

                    var markers = newValue.propertyMarkers.
                        filter(function (m) { return !!m.latitude && !!m.longitude; }).
                        map(function (m) {
                            var latLng = new maps.LatLng(m.latitude, m.longitude);
                            var marker = new maps.Marker({
                                id: m.id,
                                position: latLng,
                                icon: m.icon,
                                typeIcon: m.typeIcon
                            });
                            maps.event.addListener(marker, 'click', function () { return m.onClicked(marker); });
                            return marker;
                        });

                    new MarkerClusterer(map, markers, newValue.mapData.clusterOptions);
                });
            });
        }
    };
}]).
directive('cachedMapWindow', function ($compile) {
    return {
        restrict: 'E',
        transclude: true,
        template: '<span class="angular-google-maps-window" ng-transclude></span>',
        require: '^cachedMap',
        link: function (scope, element, attr) {
            var wnd = new google.maps.InfoWindow();
            scope.$watch(attr.show, function (newValue, oldValue) {
                if (newValue !== oldValue) {
                    var gMarker = scope.$eval(attr.gMarker);
                    wnd.setContent(element.children().html());
                    wnd.open(gMarker.map, gMarker);
                }
            });
        }
    };
});