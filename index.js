const app = require("photoshop").app;
const action = require("photoshop").action;
const core = require("photoshop").core;


function createCurvesAdjustment() {

    // app.showAlert("From " + app.foregroundColor.blue + " to " + app.backgroundColor.blue);
    // const doc = app.activeDocument;
    // const myEmptyLayer = doc.createLayer();
    // const myLayer = doc.createLayer({ name: "myLayer", opacity: 80, mode: "colorDodge" });

    core.executeAsModal(createCurvesAdjustmentAsync, { "commandName": "createCurveAdjustment", "descriptor": { "from": app.foregroundColor, "to": app.backgroundColor } });

    // app.showAlert("Hello world");n
    // const app = require("photoshop").app;
    // const allLayers = app.activeDocument.layers;
    // const allLayerNames = allLayers.map(layer => layer.name);
    // const sortedNames = allLayerNames.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
    // document.getElementById("layers").innerHTML = `
    //   <ul>${
    //     sortedNames.map(name => `<li>${name}</li>`).join("")
    //   }</ul>`;

    //       var myColor = getColorpickerColor; 

    //       if (myColor !== false) alert(myColor.rgb.hexValue);

}

async function createCurvesAdjustmentAsync(executionContext) {
    let result;
    let psAction = require("photoshop").action;
    let from = executionContext.descriptor.from;
    let to = executionContext.descriptor.to;
    // app.showAlert("IN")
    // app.showAlert("From " + executionContext.descriptor.from.blue + " to " + executionContext.descriptor.to.blue);

    // let command = [
    //     // Make adjustment layer
    //     { "_obj": "make", "_target": [{ "_ref": "adjustmentLayer" }], "using": { "_obj": "adjustmentLayer", "type": { "_obj": "curves", "presetKind": { "_enum": "presetKindType", "_value": "presetKindDefault" } } } },
    //     // Set current adjustment layer
    //     { "_obj": "set", "_target": [{ "_enum": "ordinal", "_ref": "adjustmentLayer", "_value": "targetEnum" }], "to": { "_obj": "curves", "adjustment": [{ "_obj": "curvesAdjustment", "channel": { "_enum": "channel", "_ref": "channel", "_value": "red" }, "curve": [{ "_obj": "paint", "horizontal": 0.0, "vertical": 0.0 }, { "_obj": "paint", "horizontal": 84.0, "vertical": 128.0 }, { "_obj": "paint", "horizontal": 255.0, "vertical": 255.0 }] }, { "_obj": "curvesAdjustment", "channel": { "_enum": "channel", "_ref": "channel", "_value": "grain" }, "curve": [{ "_obj": "paint", "horizontal": 0.0, "vertical": 0.0 }, { "_obj": "paint", "horizontal": 81.0, "vertical": 133.0 }, { "_obj": "paint", "horizontal": 255.0, "vertical": 255.0 }] }, { "_obj": "curvesAdjustment", "channel": { "_enum": "channel", "_ref": "channel", "_value": "blue" }, "curve": [{ "_obj": "paint", "horizontal": 0.0, "vertical": 0.0 }, { "_obj": "paint", "horizontal": 70.0, "vertical": 106.0 }, { "_obj": "paint", "horizontal": 255.0, "vertical": 255.0 }] }], "presetKind": { "_enum": "presetKindType", "_value": "presetKindCustom" } } }
    // ];

    let command = [
        // Make adjustment layer
        {
            "_obj": "make",
            "_target": [{
                "_ref": "adjustmentLayer"
            }
            ],
            "using": {
                "_obj": "adjustmentLayer",
                "type": {
                    "_obj": "curves",
                    "presetKind": {
                        "_enum": "presetKindType",
                        "_value": "presetKindDefault"
                    }
                }
            }
        },
        // Set current adjustment layer
        {
            "_obj": "set",
            "_target": [{
                "_enum": "ordinal",
                "_ref": "adjustmentLayer",
                "_value": "targetEnum"
            }
            ],
            "to": {
                "_obj": "curves",
                "adjustment": [{
                    "_obj": "curvesAdjustment",
                    "channel": {
                        "_enum": "channel",
                        "_ref": "channel",
                        "_value": "red"
                    },
                    "curve": [{
                        "_obj": "paint",
                        "horizontal": 0.0,
                        "vertical": 0.0
                    }, {
                        "_obj": "paint",
                        "horizontal": from.red,
                        "vertical": to.red
                    }, {
                        "_obj": "paint",
                        "horizontal": 255.0,
                        "vertical": 255.0
                    }
                    ]
                }, {
                    "_obj": "curvesAdjustment",
                    "channel": {
                        "_enum": "channel",
                        "_ref": "channel",
                        "_value": "grain"
                    },
                    "curve": [{
                        "_obj": "paint",
                        "horizontal": 0.0,
                        "vertical": 0.0
                    }, {
                        "_obj": "paint",
                        "horizontal": from.grain,
                        "vertical": to.grain
                    }, {
                        "_obj": "paint",
                        "horizontal": 255.0,
                        "vertical": 255.0
                    }
                    ]
                }, {
                    "_obj": "curvesAdjustment",
                    "channel": {
                        "_enum": "channel",
                        "_ref": "channel",
                        "_value": "blue"
                    },
                    "curve": [{
                        "_obj": "paint",
                        "horizontal": 0.0,
                        "vertical": 0.0
                    }, {
                        "_obj": "paint",
                        "horizontal": from.blue,
                        "vertical": to.blue
                    }, {
                        "_obj": "paint",
                        "horizontal": 255.0,
                        "vertical": 255.0
                    }
                    ]
                }
                ],
                "presetKind": {
                    "_enum": "presetKindType",
                    "_value": "presetKindCustom"
                }
            }
        }
    ];

    result = await psAction.batchPlay(command, {});
}

// async function runModalFunction() {
//     await require("photoshop").core.executeAsModal(createCurveAdjustment, { "commandName": "Action Commands" });
// }

// await runModalFunction();


document.getElementById("btnCreateCurvesAdjustment").addEventListener("click", createCurvesAdjustment);