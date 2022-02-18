import Content from './Content';

Stage.defineWidget({
    id: 'sampleWidget',
    name: 'Sample Widget',
    description: 'This is a sample widget for widget writing boilerplate',
    initialWidth: 12,
    initialHeight: 8,
    color: 'green',
    isReact: true,
    hasReadme: true,
    hasStyle: true,
    hasTemplate: true,
    initialConfiguration: [
        Stage.GenericConfig.PAGE_SIZE_CONFIG(3),
        {id: 'username', name: 'Fetch with', placeHolder: "GitHub user", description: "...", default: "cloudify-examples", type: Stage.Basic.GenericField.STRING_TYPE},
        {id: 'filter', name: 'Filter', placeHolder:"GitHub filter", description: "...", default: "blueprint in:name NOT local", type: Stage.Basic.GenericField.STRING_TYPE},
        {id: "displayStyle", name: "Display style", items: [{name:'Table', value:'table'}, {name:'Catalog', value:'catalog'}], default: "catalog", type: Stage.Basic.GenericField.LIST_TYPE},
        Stage.GenericConfig.SORT_COLUMN_CONFIG('created_at'),
        Stage.GenericConfig.SORT_ASCENDING_CONFIG(false),
        Stage.Basic.Leaflet.Map
    ],
    fetchUrl: 'http://localhost:5002',
    permission: Stage.GenericConfig.CUSTOM_WIDGET_PERMISSIONS.CUSTOM_ALL,
    categories: [Stage.GenericConfig.CATEGORY.OTHERS],

    render: function(widget, data, error, toolbox) {
        // return (
        //     <Content/>
        // );


        //Importing components
        // let { KeyIndicator } = Stage.Basic;

        // return (
        //     <KeyIndicator title='User Stars' icon='star' number={3} />
        // );

        //Using the fecthURL
        let my_data = data;
        return <Content/> //<div><p>my_data</p></div>


        // Using the lodash template
        // if (!widget.definition.template) {
        //     return 'missing template';
        // }
        // return _.template(widget.definition.template)(data);
    }
});
