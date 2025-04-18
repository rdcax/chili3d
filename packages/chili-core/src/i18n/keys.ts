// Part of the Chili3d Project, under the AGPL-3.0 License.
// See LICENSE file in the project root for full license information.

const I18N_KEYS = [
    "arc.angle",
    "arc.start",
    "axis.x",
    "axis.y",
    "axis.z",
    "body.arc",
    "body.bolean",
    "body.box",
    "body.cylinder",
    "body.cone",
    "body.sphere",
    "body.ellipse",
    "body.pyramid",
    "body.circle",
    "body.face",
    "body.fuse",
    "body.imported",
    "body.line",
    "body.multiShape",
    "body.polygon",
    "body.prism",
    "body.rect",
    "body.revol",
    "body.sweep",
    "body.wire",
    "body.editableShape",
    "body.meshNode",
    "box.dx",
    "box.dy",
    "box.dz",
    "circle.center",
    "circle.radius",
    "ellipsoid.radiusX",
    "ellipsoid.radiusY",
    "ellipsoid.radiusZ",
    "ellipse.majorRadius",
    "ellipse.minorRadius",
    "command.arc",
    "command.array",
    "command.bezier",
    "command.boolean.common",
    "command.boolean.cut",
    "command.boolean.fuse",
    "command.box",
    "command.pyramid",
    "command.cylinder",
    "command.cone",
    "command.sphere",
    "command.ellipse",
    "command.break",
    "command.chamfer",
    "command.circle",
    "command.copy",
    "command.copySubShape",
    "command.delete",
    "command.document.new",
    "command.document.open",
    "command.document.save",
    "command.document.saveAs",
    "command.document.saveToFile",
    "command.explode",
    "command.export",
    "command.faceable.isFace",
    "command.fillet",
    "command.fuse",
    "command.import",
    "command.line.isConnected",
    "command.line",
    "command.mirror",
    "command.mode.repeat",
    "command.move",
    "command.newFolder",
    "command.newGroup",
    "command.offset",
    "command.polygon",
    "command.prism",
    "command.rect",
    "command.redo",
    "command.removeFeature",
    "command.removeSubShapes",
    "command.revol",
    "command.rotate",
    "command.section",
    "command.split",
    "command.sweep",
    "command.thickSolid",
    "command.toFace",
    "command.toWire",
    "command.toShell",
    "command.toSolid",
    "command.trim",
    "command.undo",
    "common.angle",
    "common.back",
    "common.cancel",
    "common.clone",
    "common.color",
    "common.confirm",
    "common.general",
    "common.length",
    "common.material",
    "common.matrix",
    "common.name",
    "common.normal",
    "common.opacity",
    "common.thickness",
    "common.type",
    "entity.editable",
    "entity.parameter",
    "error.default:{0}",
    "error.input.cannotInputANumber",
    "error.input.invalidNumber",
    "error.input.threeNumberCanBeInput",
    "error.input.unsupportedInputs",
    "error.import.unsupportedFileType:{0}",
    "error.export.noNodeCanBeExported",
    "file.format",
    "home.recent",
    "home.welcome",
    "items.header",
    "items.tool.delete",
    "items.tool.expandAll",
    "items.tool.newFolder",
    "items.tool.unexpandAll",
    "line.end",
    "line.start",
    "line.type.line",
    "line.type.xline",
    "material.texture.image",
    "material.texture.rotation",
    "material.texture.wrapS",
    "material.texture.wrapT",
    "material.texture.repeat",
    "material.texture.offset",
    "material.map",
    "material.specular",
    "material.shininess",
    "material.emissive",
    "material.specularMap",
    "material.normalMap",
    "material.bumpMap",
    "material.roughnessMap",
    "material.emissiveMap",
    "material.metalness",
    "material.metalnessMap",
    "material.roughness",
    "model.visible",
    "operate.pickCircleCenter",
    "operate.pickFistPoint",
    "operate.pickNextPoint",
    "operate.pickRadius",
    "polygon.points",
    "prompt.default",
    "prompt.deleteDocument{0}",
    "prompt.polygon.close",
    "prompt.saveDocument{0}",
    "prompt.select.edges",
    "prompt.select.faces",
    "prompt.select.models",
    "prompt.select.noModelSelected",
    "prompt.select.shape",
    "prompt.select.vertexs",
    "prompt.select.wires",
    "properties.group.transform",
    "properties.header",
    "properties.multivalue",
    "rect.dx",
    "rect.dy",
    "ribbon.group.2d",
    "ribbon.group.3d",
    "ribbon.group.boolean",
    "ribbon.group.converter",
    "ribbon.group.draw",
    "ribbon.group.importExport",
    "ribbon.group.modify",
    "ribbon.group.other",
    "ribbon.group.selection",
    "ribbon.group.tools",
    "ribbon.group.workingPlane",
    "ribbon.tab.draw",
    "ribbon.tab.file",
    "ribbon.tab.tools",
    "ribbon.tab.startup",
    "snap.center",
    "snap.end",
    "snap.intersection",
    "snap.mid",
    "snap.perpendicular",
    "snap.nearest",
    "statusBar.snap",
    "statusBar.tracking",
    "toast.command.{0}excuting",
    "toast.converter.error",
    "toast.converter.invalidColor",
    "toast.delete{0}Objects",
    "toast.document.noActived",
    "toast.document.saved",
    "toast.downloading",
    "toast.excuting{0}",
    "toast.fail",
    "toast.read.error",
    "toast.select.noSelected",
    "toast.success",
    "transform.rotation",
    "transform.scale",
    "transform.translation",
    "vertex.point",
    "workingPlane.dynamic",
    "workingPlane.alignToPlane",
    "workingPlane.fromSection",
    "workingPlane.set",
    "test.performace",
] as const;

export type I18nKeys = (typeof I18N_KEYS)[number];
