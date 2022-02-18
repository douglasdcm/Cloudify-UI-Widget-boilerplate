import Content from './Content';

Stage.defineWidget({
    id: 'sampleWidget',
    name: 'Sample Widget',
    description: 'This is a sample widget for widget writing boilerplate',
    initialWidth: 12,
    initialHeight: 8,
    color: 'green',
    isReact: true,
    fetchParams: function(widget, toolbox) {
        return {
            id: 'simple-hello-world-example'
        }
    },
    // fetchData: function(widget, toolbox, params) {
    //     return Promise.resolve({fetchedText: 'Fetched text'});
    // },
    fetchUrl: {
        blueprints: '[manager]/blueprints[params]'
    },
    initialConfiguration: [
        {id: 'confText', name: 'Conf Item',  placeHolder: 'Configuration text item', default: 'Conf text', type: Stage.Basic.GenericField.STRING_TYPE}
    ],
    permission: Stage.GenericConfig.CUSTOM_WIDGET_PERMISSIONS.CUSTOM_ALL,
    categories: [Stage.GenericConfig.CATEGORY.OTHERS],

    render: function(widget, data, error, toolbox) { 
        let {Loading} = Stage.Basic;

        if (_.isEmpty(data)) { // Make sure the data is already fetched, if not show a loading spinner
            return (<Loading message='Loading data...'></Loading>);
        } else {  
            return (
                <div>
                    <p>confItem value: {widget.configuration.confText}</p>
                    <p>fetchedText value: {data.fetchedText}</p>
                    <p>blueprint id value: {data.blueprints.items[0].id}</p>
                    <p>blueprint description: {data.blueprints.items[0].description}</p>
                    <p>blueprint main_file_name: {data.blueprints.items[0].main_file_name}</p>
                </div>
            );
        }
    }
});
