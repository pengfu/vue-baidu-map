# vue-baidu-map

> A Vue component for Baidu Map.

## Usage

The following is an example to show how to get the postion of the mouse clicking area.

```vue
<template>
    <div class="side-right2">
        <div class="list-pane paging-format">
            <baidu-map id="location" style="height:500px"></baidu-map>
        </div>
    </div>
</template>
<style>
</style>
<script>
    import baiduMap from './BaiduMap.vue'
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        events:{
            onSelect(position){
                console.log(JSON.stringify(position))
            }
        },
        components: {
            baiduMap
        }
    }
</script>
```

Before you start working on coding with Baidu API, you should add script to your main script:

```html
<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=your_key"></script>
```

## API

### Props

- `id` {String} the id to create the map element in DOM tree, default value: "allmap".
- `onSelect` {Function} this function will be fired when user click a marker and the info bubble is shown
  - `point` {Point} the position of being clicked to some maker
    - `lng` {String} the `lng` of the point.
    - `lat` {String} the `lat` of the point.
