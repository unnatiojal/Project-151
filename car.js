AFRAME.registerComponent("car-model", {
    schema:{
        moveX: {type:'string', default:"../assets/scene.gltf"}
    },

    init: function() {
        this.el.setAttribute("gltf-model", this.data.moveX);
        this.el.setAttribute("position", {
            x: -4, y: 40, z: 200
        });
        this.el.setAttribute("rotation", {
            x: 0, y: -90, z: 0
        });
    }
})