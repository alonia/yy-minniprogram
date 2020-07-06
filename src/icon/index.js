Component({
    properties: {
        size: null,
        color: String,
        customStyle: String,
        classPrefix: {
            type: String,
            value: 'yy-icon'
        },
        name: {
            type: String,
            observer (val) {
                this.setData({
                    isImageName: val.indexOf('/') !== -1
                })
            }
        }
    },
    data: {

    },

    ready () {

    },
    methods: {

    }
})
