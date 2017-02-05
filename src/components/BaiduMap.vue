<template>
    <div id="{{id}}">
    </div>
</template>
<style>
</style>
<script>
    export default{
        data() {
            return {
                _map: null,
                _local : null,
            }
        },
        props: {
            id: {
                type:String,
                default: 'allmap'
            }
        },
        mouted() {
            this._map = new BMap.Map(this.id);
            this._map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
            this._map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
            this._map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用
            this._local = new BMap.LocalSearch(this._map, {
                renderOptions: { map: this._map },
                onInfoHtmlSet: poi => {
                    this.$dispatch('onSelect',poi.marker.getPosition())
                }
            });

            this._map.addEventListener("click", this.showInfo);
        },

        methods:{

            showInfo(e){
                console.log(e.point.lng + ", " + e.point.lat);
                this._map.clearOverlays()
                var mk = new BMap.Marker(e.point);
                this._map.addOverlay(mk);
                this._map.panTo(e.point);
            }
        },

        components: {}
    }
</script>
