import { Tools } from "@babylonjs/core/Misc/tools.js";
import { Matrix, TmpVectors, Vector3 } from "@babylonjs/core/Maths/math.vector.js";
import { Container3D } from "./container3D.js";
/**
 * Class used to create a stack panel in 3D on XY plane
 */
export class StackPanel3D extends Container3D {
    /**
     * Gets or sets a boolean indicating if the stack panel is vertical or horizontal (horizontal by default)
     */
    get isVertical() {
        return this._isVertical;
    }
    set isVertical(value) {
        if (this._isVertical === value) {
            return;
        }
        this._isVertical = value;
        Tools.SetImmediate(() => {
            this._arrangeChildren();
        });
    }
    /**
     * Creates new StackPanel
     * @param isVertical
     */
    constructor(isVertical = false) {
        super();
        this._isVertical = false;
        /**
         * Gets or sets the distance between elements
         */
        this.margin = 0.1;
        this._isVertical = isVertical;
    }
    _arrangeChildren() {
        let width = 0;
        let height = 0;
        let controlCount = 0;
        const extendSizes = [];
        const currentInverseWorld = Matrix.Invert(this.node.computeWorldMatrix(true));
        // Measure
        for (const child of this._children) {
            if (!child.mesh) {
                continue;
            }
            controlCount++;
            child.mesh.computeWorldMatrix(true);
            child.mesh.getWorldMatrix().multiplyToRef(currentInverseWorld, TmpVectors.Matrix[0]);
            const boundingBox = child.mesh.getBoundingInfo().boundingBox;
            const extendSize = Vector3.TransformNormal(boundingBox.extendSize, TmpVectors.Matrix[0]);
            extendSizes.push(extendSize);
            if (this._isVertical) {
                height += extendSize.y;
            }
            else {
                width += extendSize.x;
            }
        }
        if (this._isVertical) {
            height += ((controlCount - 1) * this.margin) / 2;
        }
        else {
            width += ((controlCount - 1) * this.margin) / 2;
        }
        // Arrange
        let offset;
        if (this._isVertical) {
            offset = -height;
        }
        else {
            offset = -width;
        }
        let index = 0;
        for (const child of this._children) {
            if (!child.mesh) {
                continue;
            }
            controlCount--;
            const extendSize = extendSizes[index++];
            if (this._isVertical) {
                child.position.y = offset + extendSize.y;
                child.position.x = 0;
                offset += extendSize.y * 2;
            }
            else {
                child.position.x = offset + extendSize.x;
                child.position.y = 0;
                offset += extendSize.x * 2;
            }
            offset += controlCount > 0 ? this.margin : 0;
        }
    }
}
//# sourceMappingURL=stackPanel3D.js.map