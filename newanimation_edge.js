/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['165px', '11px','500px','500px','auto', 'auto'],
                fill: ["rgba(205,30,30,1.00)"],
                stroke: [15,"rgba(49,43,43,1.00)","solid"]
            },
            {
                id: '_110-gaming-logo3',
                type: 'image',
                rect: ['293px', '36px','300px','20.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"110-gaming-logo.png",'0px','0px']
            },
            {
                id: 'EEs6DLGr',
                type: 'image',
                rect: ['325px', '44px','181px','91px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"EEs6DLGr.jpg",'0px','0px']
            },
            {
                id: 'mnj',
                type: 'image',
                rect: ['425px', '53px','300px','187px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"mnj.png",'0px','0px']
            },
            {
                id: 'play-button5',
                type: 'image',
                rect: ['351px', '299','148px','101px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"play-button.png",'0px','0px']
            },
            {
                id: 'ps45',
                type: 'image',
                rect: ['266px', '190px','331px','148px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"ps4.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_play-button5}": [
                ["style", "top", '322px'],
                ["style", "opacity", '0.07692299783229828'],
                ["style", "left", '351px'],
                ["style", "cursor", 'pointer']
            ],
            "${_ps45}": [
                ["style", "top", '-105px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '199px'],
                ["style", "opacity", '0'],
                ["style", "left", '250px'],
                ["style", "width", '338px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1000px'],
                ["style", "width", '1000px']
            ],
            "${_mnj}": [
                ["style", "top", '-129px'],
                ["style", "background-size", [99.8,99.8], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "opacity", '1'],
                ["style", "clip", [150,300,187,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '266px']
            ],
            "${_EEs6DLGr}": [
                ["style", "top", '44px'],
                ["style", "height", '91px'],
                ["style", "opacity", '0'],
                ["style", "left", '325px'],
                ["style", "width", '181px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(205,30,30,1.00)'],
                ["color", "border-color", 'rgba(49,43,43,1.00)'],
                ["style", "top", '11px'],
                ["style", "left", '165px'],
                ["style", "height", '500px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '15px'],
                ["style", "width", '500px']
            ],
            "${__110-gaming-logo3}": [
                ["style", "top", '38px'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "clip", [0,300,600,600], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "height", '15%'],
                ["style", "opacity", '0.6666669845581055'],
                ["style", "left", '-155px'],
                ["style", "width", '300px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7000,
            autoPlay: true,
            timeline: [
                { id: "eid310", tween: [ "style", "${_mnj}", "clip", [150,300,187,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [150,300,187,0]}], position: 4750, duration: 0 },
                { id: "eid353", tween: [ "style", "${_mnj}", "clip", [150,300,187,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [150,300,187,0]}], position: 5180, duration: 0 },
                { id: "eid354", tween: [ "style", "${_mnj}", "clip", [40,300,187,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [70,300,187,0]}], position: 5564, duration: 0 },
                { id: "eid364", tween: [ "style", "${_mnj}", "clip", [0,300,187,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [40,300,187,0]}], position: 5743, duration: 0 },
                { id: "eid355", tween: [ "style", "${_mnj}", "clip", [0,300,187,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,300,187,0]}], position: 6036, duration: 0 },
                { id: "eid347", tween: [ "style", "${_mnj}", "background-size", [99.8,99.8], { valueTemplate: '@@0@@% @@1@@%', fromValue: [99.8,99.8]}], position: 4750, duration: 0 },
                { id: "eid165", tween: [ "style", "${_mnj}", "top", '64px', { fromValue: '-129px'}], position: 4750, duration: 1286 },
                { id: "eid166", tween: [ "style", "${_mnj}", "top", '113px', { fromValue: '64px'}], position: 6036, duration: 964 },
                { id: "eid305", tween: [ "style", "${_mnj}", "opacity", '1', { fromValue: '1'}], position: 4750, duration: 0 },
                { id: "eid229", tween: [ "style", "${__110-gaming-logo3}", "top", '38px', { fromValue: '38px'}], position: 0, duration: 0 },
                { id: "eid125", tween: [ "style", "${_play-button5}", "top", '263px', { fromValue: '322px'}], position: 5557, duration: 1431 },
                { id: "eid437", tween: [ "style", "${_ps45}", "left", '250px', { fromValue: '250px'}], position: 7000, duration: 0 },
                { id: "eid461", tween: [ "style", "${_mnj}", "left", '275px', { fromValue: '266px'}], position: 4750, duration: 0 },
                { id: "eid124", tween: [ "style", "${_play-button5}", "opacity", '0.51282051282051', { fromValue: '0.07692299783229828'}], position: 5557, duration: 644 },
                { id: "eid129", tween: [ "style", "${_play-button5}", "opacity", '0.93162393162393', { fromValue: '0.5128210186958313'}], position: 6202, duration: 798 },
                { id: "eid215", tween: [ "style", "${__110-gaming-logo3}", "left", '293px', { fromValue: '-155px'}], position: 0, duration: 725 },
                { id: "eid220", tween: [ "style", "${__110-gaming-logo3}", "left", '288px', { fromValue: '293px'}], position: 725, duration: 94 },
                { id: "eid214", tween: [ "style", "${__110-gaming-logo3}", "opacity", '0', { fromValue: '0.6666669845581055'}], position: 1750, duration: 479 },
                { id: "eid375", tween: [ "style", "${_ps45}", "opacity", '0.79487223757638', { fromValue: '0'}], position: 3288, duration: 962 },
                { id: "eid377", tween: [ "style", "${_ps45}", "opacity", '1', { fromValue: '0.79487223757638'}], position: 4250, duration: 149 },
                { id: "eid400", tween: [ "style", "${_ps45}", "opacity", '0', { fromValue: '1'}], position: 4750, duration: 393 },
                { id: "eid249", tween: [ "style", "${__110-gaming-logo3}", "clip", [0,300,170,3], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,300,600,600]}], position: 0, duration: 1084, easing: "easeInSine" },
                { id: "eid234", tween: [ "style", "${__110-gaming-logo3}", "clip", [0,300,15,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,300,170,3]}], position: 3288, duration: 74 },
                { id: "eid213", tween: [ "style", "${__110-gaming-logo3}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
                { id: "eid486", tween: [ "style", "${__110-gaming-logo3}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
                { id: "eid487", tween: [ "style", "${__110-gaming-logo3}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
                { id: "eid488", tween: [ "style", "${__110-gaming-logo3}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
                { id: "eid489", tween: [ "style", "${__110-gaming-logo3}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0 },
                { id: "eid369", tween: [ "style", "${_ps45}", "top", '149px', { fromValue: '-105px'}], position: 3288, duration: 442 },
                { id: "eid371", tween: [ "style", "${_ps45}", "top", '154px', { fromValue: '149px'}], position: 3730, duration: 1520 },
                { id: "eid374", tween: [ "style", "${_ps45}", "top", '190px', { fromValue: '154px'}], position: 5250, duration: 1613 },
                { id: "eid438", tween: [ "style", "${_ps45}", "top", '183px', { fromValue: '190px'}], position: 7000, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-14530302");
