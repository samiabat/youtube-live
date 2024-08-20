/*!
 * @pixiv/three-vrm-animation v2.1.2
 * The implementation of VRM Animation
 *
 * Copyright (c) 2023-2024 pixiv Inc.
 * @pixiv/three-vrm-animation is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */
import * as THREE from 'three';

/*!
 * @pixiv/three-vrm-core v2.1.2
 * The implementation of core features of VRM, for @pixiv/three-vrm
 *
 * Copyright (c) 2020-2024 pixiv Inc.
 * @pixiv/three-vrm-core is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/* eslint-disable @typescript-eslint/naming-convention */
const VRMExpressionPresetName = {
    Aa: 'aa',
    Ih: 'ih',
    Ou: 'ou',
    Ee: 'ee',
    Oh: 'oh',
    Blink: 'blink',
    Happy: 'happy',
    Angry: 'angry',
    Sad: 'sad',
    Relaxed: 'relaxed',
    LookUp: 'lookUp',
    Surprised: 'surprised',
    LookDown: 'lookDown',
    LookLeft: 'lookLeft',
    LookRight: 'lookRight',
    BlinkLeft: 'blinkLeft',
    BlinkRight: 'blinkRight',
    Neutral: 'neutral',
};

new THREE.Color();

new THREE.Vector2();

new THREE.Vector3();
new THREE.Vector3();
new THREE.Quaternion();

/* eslint-disable @typescript-eslint/naming-convention */
/**
 * An object that maps from {@link VRMHumanBoneName} to its parent {@link VRMHumanBoneName}.
 *
 * Ref: https://github.com/vrm-c/vrm-specification/blob/master/specification/VRMC_vrm-1.0/humanoid.md
 */
const VRMHumanBoneParentMap = {
    hips: null,
    spine: 'hips',
    chest: 'spine',
    upperChest: 'chest',
    neck: 'upperChest',
    head: 'neck',
    leftEye: 'head',
    rightEye: 'head',
    jaw: 'head',
    leftUpperLeg: 'hips',
    leftLowerLeg: 'leftUpperLeg',
    leftFoot: 'leftLowerLeg',
    leftToes: 'leftFoot',
    rightUpperLeg: 'hips',
    rightLowerLeg: 'rightUpperLeg',
    rightFoot: 'rightLowerLeg',
    rightToes: 'rightFoot',
    leftShoulder: 'upperChest',
    leftUpperArm: 'leftShoulder',
    leftLowerArm: 'leftUpperArm',
    leftHand: 'leftLowerArm',
    rightShoulder: 'upperChest',
    rightUpperArm: 'rightShoulder',
    rightLowerArm: 'rightUpperArm',
    rightHand: 'rightLowerArm',
    leftThumbMetacarpal: 'leftHand',
    leftThumbProximal: 'leftThumbMetacarpal',
    leftThumbDistal: 'leftThumbProximal',
    leftIndexProximal: 'leftHand',
    leftIndexIntermediate: 'leftIndexProximal',
    leftIndexDistal: 'leftIndexIntermediate',
    leftMiddleProximal: 'leftHand',
    leftMiddleIntermediate: 'leftMiddleProximal',
    leftMiddleDistal: 'leftMiddleIntermediate',
    leftRingProximal: 'leftHand',
    leftRingIntermediate: 'leftRingProximal',
    leftRingDistal: 'leftRingIntermediate',
    leftLittleProximal: 'leftHand',
    leftLittleIntermediate: 'leftLittleProximal',
    leftLittleDistal: 'leftLittleIntermediate',
    rightThumbMetacarpal: 'rightHand',
    rightThumbProximal: 'rightThumbMetacarpal',
    rightThumbDistal: 'rightThumbProximal',
    rightIndexProximal: 'rightHand',
    rightIndexIntermediate: 'rightIndexProximal',
    rightIndexDistal: 'rightIndexIntermediate',
    rightMiddleProximal: 'rightHand',
    rightMiddleIntermediate: 'rightMiddleProximal',
    rightMiddleDistal: 'rightMiddleIntermediate',
    rightRingProximal: 'rightHand',
    rightRingIntermediate: 'rightRingProximal',
    rightRingDistal: 'rightRingIntermediate',
    rightLittleProximal: 'rightHand',
    rightLittleIntermediate: 'rightLittleProximal',
    rightLittleDistal: 'rightLittleIntermediate',
};

/**
 * A compat function for `Quaternion.invert()` / `Quaternion.inverse()`.
 * `Quaternion.invert()` is introduced in r123 and `Quaternion.inverse()` emits a warning.
 * We are going to use this compat for a while.
 * @param target A target quaternion
 */
function quatInvertCompat(target) {
    if (target.invert) {
        target.invert();
    }
    else {
        target.inverse();
    }
    return target;
}

new THREE.Vector3();
new THREE.Quaternion();

new THREE.Vector3();
new THREE.Quaternion();
new THREE.Vector3();

new THREE.Quaternion();
new THREE.Quaternion();
new THREE.Vector3();
new THREE.Vector3();
const SQRT_2_OVER_2 = Math.sqrt(2.0) / 2.0;
new THREE.Quaternion(0, 0, -SQRT_2_OVER_2, SQRT_2_OVER_2);
new THREE.Vector3(0.0, 1.0, 0.0);

const _position = new THREE.Vector3();
const _scale = new THREE.Vector3();
/**
 * A replacement of `Object3D.getWorldQuaternion`.
 * Extract the world quaternion of an object from its world space matrix, without calling `Object3D.updateWorldMatrix`.
 * Use this when you're sure that the world matrix is up-to-date.
 *
 * @param object The object
 * @param out A target quaternion
 */
function getWorldQuaternionLite(object, out) {
    object.matrixWorld.decompose(_position, out, _scale);
    return out;
}

/**
 * Calculate azimuth / altitude angles from a vector.
 *
 * This returns a difference of angles from (1, 0, 0).
 * Azimuth represents an angle around Y axis.
 * Altitude represents an angle around Z axis.
 * It is rotated in intrinsic Y-Z order.
 *
 * @param vector The vector
 * @returns A tuple contains two angles, `[ azimuth, altitude ]`
 */
function calcAzimuthAltitude(vector) {
    return [Math.atan2(-vector.z, vector.x), Math.atan2(vector.y, Math.sqrt(vector.x * vector.x + vector.z * vector.z))];
}

/**
 * Make sure the angle is within -PI to PI.
 *
 * @example
 * ```js
 * sanitizeAngle(1.5 * Math.PI) // -0.5 * PI
 * ```
 *
 * @param angle An input angle
 */
function sanitizeAngle(angle) {
    const roundTurn = Math.round(angle / 2.0 / Math.PI);
    return angle - 2.0 * Math.PI * roundTurn;
}

const VEC3_POSITIVE_Z$1 = new THREE.Vector3(0.0, 0.0, 1.0);
const _v3A$1 = new THREE.Vector3();
const _v3B = new THREE.Vector3();
const _v3C = new THREE.Vector3();
const _quatA$1 = new THREE.Quaternion();
const _quatB$1 = new THREE.Quaternion();
const _quatC$1 = new THREE.Quaternion();
const _quatD = new THREE.Quaternion();
const _eulerA$1 = new THREE.Euler();
/**
 * A class controls eye gaze movements of a VRM.
 */
class VRMLookAt {
    /**
     * Its current angle around Y axis, in degree.
     */
    get yaw() {
        return this._yaw;
    }
    /**
     * Its current angle around Y axis, in degree.
     */
    set yaw(value) {
        this._yaw = value;
        this._needsUpdate = true;
    }
    /**
     * Its current angle around X axis, in degree.
     */
    get pitch() {
        return this._pitch;
    }
    /**
     * Its current angle around X axis, in degree.
     */
    set pitch(value) {
        this._pitch = value;
        this._needsUpdate = true;
    }
    /**
     * @deprecated Use {@link getEuler} instead.
     */
    get euler() {
        console.warn('VRMLookAt: euler is deprecated. use getEuler() instead.');
        return this.getEuler(new THREE.Euler());
    }
    /**
     * Create a new {@link VRMLookAt}.
     *
     * @param humanoid A {@link VRMHumanoid}
     * @param applier A {@link VRMLookAtApplier}
     */
    constructor(humanoid, applier) {
        /**
         * The origin of LookAt. Position offset from the head bone.
         */
        this.offsetFromHeadBone = new THREE.Vector3();
        /**
         * If this is true, the LookAt will be updated automatically by calling {@link update}, towarding the direction to the {@link target}.
         * `true` by default.
         *
         * See also: {@link target}
         */
        this.autoUpdate = true;
        /**
         * The front direction of the face.
         * Intended to be used for VRM 0.0 compat (VRM 0.0 models are facing Z- instead of Z+).
         * You usually don't want to touch this.
         */
        this.faceFront = new THREE.Vector3(0.0, 0.0, 1.0);
        this.humanoid = humanoid;
        this.applier = applier;
        this._yaw = 0.0;
        this._pitch = 0.0;
        this._needsUpdate = true;
        this._restHeadWorldQuaternion = this.getLookAtWorldQuaternion(new THREE.Quaternion());
    }
    /**
     * Get its yaw-pitch angles as an `Euler`.
     * Does NOT consider {@link faceFront}; it returns `Euler(0, 0, 0; "YXZ")` by default regardless of the faceFront value.
     *
     * @param target The target euler
     */
    getEuler(target) {
        return target.set(THREE.MathUtils.DEG2RAD * this._pitch, THREE.MathUtils.DEG2RAD * this._yaw, 0.0, 'YXZ');
    }
    /**
     * Copy the given {@link VRMLookAt} into this one.
     * {@link humanoid} must be same as the source one.
     * {@link applier} will reference the same instance as the source one.
     * @param source The {@link VRMLookAt} you want to copy
     * @returns this
     */
    copy(source) {
        if (this.humanoid !== source.humanoid) {
            throw new Error('VRMLookAt: humanoid must be same in order to copy');
        }
        this.offsetFromHeadBone.copy(source.offsetFromHeadBone);
        this.applier = source.applier;
        this.autoUpdate = source.autoUpdate;
        this.target = source.target;
        this.faceFront.copy(source.faceFront);
        return this;
    }
    /**
     * Returns a clone of this {@link VRMLookAt}.
     * Note that {@link humanoid} and {@link applier} will reference the same instance as this one.
     * @returns Copied {@link VRMLookAt}
     */
    clone() {
        return new VRMLookAt(this.humanoid, this.applier).copy(this);
    }
    /**
     * Reset the lookAt direction (yaw and pitch) to the initial direction.
     */
    reset() {
        this._yaw = 0.0;
        this._pitch = 0.0;
        this._needsUpdate = true;
    }
    /**
     * Get its lookAt position in world coordinate.
     *
     * @param target A target `THREE.Vector3`
     */
    getLookAtWorldPosition(target) {
        const head = this.humanoid.getRawBoneNode('head');
        return target.copy(this.offsetFromHeadBone).applyMatrix4(head.matrixWorld);
    }
    /**
     * Get its lookAt rotation in world coordinate.
     * Does NOT consider {@link faceFront}.
     *
     * @param target A target `THREE.Quaternion`
     */
    getLookAtWorldQuaternion(target) {
        const head = this.humanoid.getRawBoneNode('head');
        return getWorldQuaternionLite(head, target);
    }
    /**
     * Get a quaternion that rotates the +Z unit vector of the humanoid Head to the {@link faceFront} direction.
     *
     * @param target A target `THREE.Quaternion`
     */
    getFaceFrontQuaternion(target) {
        if (this.faceFront.distanceToSquared(VEC3_POSITIVE_Z$1) < 0.01) {
            return target.copy(this._restHeadWorldQuaternion).invert();
        }
        const [faceFrontAzimuth, faceFrontAltitude] = calcAzimuthAltitude(this.faceFront);
        _eulerA$1.set(0.0, 0.5 * Math.PI + faceFrontAzimuth, faceFrontAltitude, 'YZX');
        return target.setFromEuler(_eulerA$1).premultiply(_quatD.copy(this._restHeadWorldQuaternion).invert());
    }
    /**
     * Get its LookAt direction in world coordinate.
     *
     * @param target A target `THREE.Vector3`
     */
    getLookAtWorldDirection(target) {
        this.getLookAtWorldQuaternion(_quatB$1);
        this.getFaceFrontQuaternion(_quatC$1);
        return target
            .copy(VEC3_POSITIVE_Z$1)
            .applyQuaternion(_quatB$1)
            .applyQuaternion(_quatC$1)
            .applyEuler(this.getEuler(_eulerA$1));
    }
    /**
     * Set its lookAt target position.
     *
     * Note that its result will be instantly overwritten if {@link VRMLookAtHead.autoUpdate} is enabled.
     *
     * If you want to track an object continuously, you might want to use {@link target} instead.
     *
     * @param position A target position, in world space
     */
    lookAt(position) {
        // Look at direction in local coordinate
        const headRotDiffInv = _quatA$1
            .copy(this._restHeadWorldQuaternion)
            .multiply(quatInvertCompat(this.getLookAtWorldQuaternion(_quatB$1)));
        const headPos = this.getLookAtWorldPosition(_v3B);
        const lookAtDir = _v3C.copy(position).sub(headPos).applyQuaternion(headRotDiffInv).normalize();
        // calculate angles
        const [azimuthFrom, altitudeFrom] = calcAzimuthAltitude(this.faceFront);
        const [azimuthTo, altitudeTo] = calcAzimuthAltitude(lookAtDir);
        const yaw = sanitizeAngle(azimuthTo - azimuthFrom);
        const pitch = sanitizeAngle(altitudeFrom - altitudeTo); // spinning (1, 0, 0) CCW around Z axis makes the vector look up, while spinning (0, 0, 1) CCW around X axis makes the vector look down
        // apply angles
        this._yaw = THREE.MathUtils.RAD2DEG * yaw;
        this._pitch = THREE.MathUtils.RAD2DEG * pitch;
        this._needsUpdate = true;
    }
    /**
     * Update the VRMLookAtHead.
     * If {@link autoUpdate} is enabled, this will make it look at the {@link target}.
     *
     * @param delta deltaTime, it isn't used though. You can use the parameter if you want to use this in your own extended {@link VRMLookAt}.
     */
    update(delta) {
        if (this.target != null && this.autoUpdate) {
            this.lookAt(this.target.getWorldPosition(_v3A$1));
        }
        if (this._needsUpdate) {
            this._needsUpdate = false;
            this.applier.applyYawPitch(this._yaw, this._pitch);
        }
    }
}
VRMLookAt.EULER_ORDER = 'YXZ'; // yaw-pitch-roll

new THREE.Vector3(0.0, 0.0, 1.0);
new THREE.Quaternion();
new THREE.Quaternion();
new THREE.Euler(0.0, 0.0, 0.0, 'YXZ');

const RAD2DEG = 180 / Math.PI;
const _eulerA = /*@__PURE__*/ new THREE.Euler();
class VRMLookAtQuaternionProxy extends THREE.Object3D {
    constructor(lookAt) {
        super();
        this.vrmLookAt = lookAt;
        this.type = 'VRMLookAtQuaternionProxy';
        // See: https://github.com/mrdoob/three.js/blob/r158/src/core/Object3D.js#L65
        const prevRotationOnChangeCallback = this.rotation._onChangeCallback;
        this.rotation._onChange(() => {
            prevRotationOnChangeCallback();
            this._applyToLookAt();
        });
        const prevQuaternionOnChangeCallback = this.quaternion._onChangeCallback;
        this.quaternion._onChange(() => {
            prevQuaternionOnChangeCallback();
            this._applyToLookAt();
        });
    }
    _applyToLookAt() {
        _eulerA.setFromQuaternion(this.quaternion, VRMLookAt.EULER_ORDER);
        this.vrmLookAt.yaw = RAD2DEG * _eulerA.y;
        this.vrmLookAt.pitch = RAD2DEG * _eulerA.x;
    }
}

function createVRMAnimationHumanoidTracks(vrmAnimation, humanoid, metaVersion) {
    var _a, _b;
    const translation = new Map();
    const rotation = new Map();
    for (const [name, origTrack] of vrmAnimation.humanoidTracks.rotation.entries()) {
        const nodeName = (_a = humanoid.getNormalizedBoneNode(name)) === null || _a === void 0 ? void 0 : _a.name;
        if (nodeName != null) {
            const track = new THREE.QuaternionKeyframeTrack(`${nodeName}.quaternion`, origTrack.times, origTrack.values.map((v, i) => (metaVersion === '0' && i % 2 === 0 ? -v : v)));
            rotation.set(name, track);
        }
    }
    for (const [name, origTrack] of vrmAnimation.humanoidTracks.translation.entries()) {
        const nodeName = (_b = humanoid.getNormalizedBoneNode(name)) === null || _b === void 0 ? void 0 : _b.name;
        if (nodeName != null) {
            const animationY = vrmAnimation.restHipsPosition.y;
            const humanoidY = humanoid.normalizedRestPose.hips.position[1];
            const scale = humanoidY / animationY;
            const track = origTrack.clone();
            track.values = track.values.map((v, i) => (metaVersion === '0' && i % 3 !== 1 ? -v : v) * scale);
            track.name = `${nodeName}.position`;
            translation.set(name, track);
        }
    }
    return { translation, rotation };
}
function createVRMAnimationExpressionTracks(vrmAnimation, expressionManager) {
    const preset = new Map();
    const custom = new Map();
    for (const [name, origTrack] of vrmAnimation.expressionTracks.preset.entries()) {
        const trackName = expressionManager.getExpressionTrackName(name);
        if (trackName != null) {
            const track = origTrack.clone();
            track.name = trackName;
            preset.set(name, track);
        }
    }
    for (const [name, origTrack] of vrmAnimation.expressionTracks.custom.entries()) {
        const trackName = expressionManager.getExpressionTrackName(name);
        if (trackName != null) {
            const track = origTrack.clone();
            track.name = trackName;
            custom.set(name, track);
        }
    }
    return { preset, custom };
}
function createVRMAnimationLookAtTrack(vrmAnimation, trackName) {
    if (vrmAnimation.lookAtTrack == null) {
        return null;
    }
    const track = vrmAnimation.lookAtTrack.clone();
    track.name = trackName;
    return track;
}
/**
 * Create an AnimationClip out of the given VRMAnimation and the VRM.
 *
 * @param vrmAnimation A {@link VRMAnimation}.
 * @param vrm A {@link VRMCore}.
 * @returns An AnimationClip
 */
function createVRMAnimationClip(vrmAnimation, vrm) {
    const tracks = [];
    const humanoidTracks = createVRMAnimationHumanoidTracks(vrmAnimation, vrm.humanoid, vrm.meta.metaVersion);
    tracks.push(...humanoidTracks.translation.values());
    tracks.push(...humanoidTracks.rotation.values());
    if (vrm.expressionManager != null) {
        const expressionTracks = createVRMAnimationExpressionTracks(vrmAnimation, vrm.expressionManager);
        tracks.push(...expressionTracks.preset.values());
        tracks.push(...expressionTracks.custom.values());
    }
    if (vrm.lookAt != null) {
        // search VRMLookAtQuaternionProxy
        let proxy = vrm.scene.children.find((obj) => obj instanceof VRMLookAtQuaternionProxy);
        if (proxy == null) {
            // if not found, create a new one
            console.warn('createVRMAnimationClip: VRMLookAtQuaternionProxy is not found. Creating a new one automatically. To suppress this warning, create a VRMLookAtQuaternionProxy manually');
            proxy = new VRMLookAtQuaternionProxy(vrm.lookAt);
            proxy.name = 'VRMLookAtQuaternionProxy';
            vrm.scene.add(proxy);
        }
        else if (proxy.name == null) {
            // if found but name is not set, set the name automatically
            console.warn('createVRMAnimationClip: VRMLookAtQuaternionProxy is found but its name is not set. Setting the name automatically. To suppress this warning, set the name manually');
            proxy.name = 'VRMLookAtQuaternionProxy';
        }
        // create a track
        const track = createVRMAnimationLookAtTrack(vrmAnimation, `${proxy.name}.quaternion`);
        if (track != null) {
            tracks.push(track);
        }
    }
    return new THREE.AnimationClip('Clip', vrmAnimation.duration, tracks);
}

/**
 * Represents a single VRM Animation.
 * You probably want to create an AnimationClip using {@link createVRMAnimationClip}.
 */
class VRMAnimation {
    constructor() {
        this.duration = 0.0;
        this.restHipsPosition = new THREE.Vector3();
        this.humanoidTracks = {
            translation: new Map(),
            rotation: new Map(),
        };
        this.expressionTracks = {
            preset: new Map(),
            custom: new Map(),
        };
        this.lookAtTrack = null;
    }
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * ```js
 * arrayChunk( [ 1, 2, 3, 4, 5, 6 ], 2 )
 * // will be
 * [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
 * ```
 */
function arrayChunk(array, every) {
    const N = array.length;
    const ret = [];
    let current = [];
    let remaining = 0;
    for (let i = 0; i < N; i++) {
        const el = array[i];
        if (remaining <= 0) {
            remaining = every;
            current = [];
            ret.push(current);
        }
        current.push(el);
        remaining--;
    }
    return ret;
}

const MAT4_IDENTITY = /*@__PURE__*/ new THREE.Matrix4();
const _v3A = /*@__PURE__*/ new THREE.Vector3();
const _quatA = /*@__PURE__*/ new THREE.Quaternion();
const _quatB = /*@__PURE__*/ new THREE.Quaternion();
const _quatC = /*@__PURE__*/ new THREE.Quaternion();
/**
 * Possible spec versions it recognizes.
 */
const POSSIBLE_SPEC_VERSIONS = /*@__PURE__*/ new Set(['1.0', '1.0-draft']);
const vrmExpressionPresetNameSet = /*@__PURE__*/ new Set(Object.values(VRMExpressionPresetName));
/**
 * A plugin of GLTFLoader that imports {@link VRMAnimation}s from a `VRMC_vrm_animation` extension and gltf animations.
 */
class VRMAnimationLoaderPlugin {
    constructor(parser) {
        this.parser = parser;
    }
    get name() {
        return 'VRMC_vrm_animation';
    }
    afterRoot(gltf) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const defGltf = gltf.parser.json;
            const defExtensionsUsed = defGltf.extensionsUsed;
            if (defExtensionsUsed == null || defExtensionsUsed.indexOf(this.name) == -1) {
                return;
            }
            const defExtension = (_a = defGltf.extensions) === null || _a === void 0 ? void 0 : _a[this.name];
            if (defExtension == null) {
                return;
            }
            const specVersion = defExtension.specVersion;
            if (!POSSIBLE_SPEC_VERSIONS.has(specVersion)) {
                console.warn(`VRMAnimationLoaderPlugin: Unknown VRMC_vrm_animation spec version: ${specVersion}`);
                return;
            }
            if (specVersion === '1.0-draft') {
                console.warn('VRMAnimationLoaderPlugin: Using a draft spec version: 1.0-draft. Some behaviors may be different. Consider updating the animation file.');
            }
            const nodeMap = this._createNodeMap(defExtension);
            const worldMatrixMap = yield this._createBoneWorldMatrixMap(gltf, defExtension);
            const hipsNode = (_c = (_b = defExtension.humanoid) === null || _b === void 0 ? void 0 : _b.humanBones['hips']) === null || _c === void 0 ? void 0 : _c.node;
            const hips = hipsNode != null ? (yield gltf.parser.getDependency('node', hipsNode)) : null;
            const restHipsPosition = new THREE.Vector3();
            hips === null || hips === void 0 ? void 0 : hips.getWorldPosition(restHipsPosition);
            const clips = gltf.animations;
            const animations = clips.map((clip, iAnimation) => {
                const defAnimation = defGltf.animations[iAnimation];
                const animation = this._parseAnimation(clip, defAnimation, nodeMap, worldMatrixMap);
                animation.restHipsPosition = restHipsPosition;
                return animation;
            });
            gltf.userData.vrmAnimations = animations;
        });
    }
    _createNodeMap(defExtension) {
        var _a, _b, _c, _d, _e;
        const humanoidIndexToName = new Map();
        const expressionsIndexToName = new Map();
        // humanoid
        const humanBones = (_a = defExtension.humanoid) === null || _a === void 0 ? void 0 : _a.humanBones;
        if (humanBones) {
            Object.entries(humanBones).forEach(([name, bone]) => {
                const node = bone === null || bone === void 0 ? void 0 : bone.node;
                if (node != null) {
                    humanoidIndexToName.set(node, name);
                }
            });
        }
        // expressions
        const preset = (_b = defExtension.expressions) === null || _b === void 0 ? void 0 : _b.preset;
        if (preset) {
            Object.entries(preset).forEach(([name, expression]) => {
                const node = expression === null || expression === void 0 ? void 0 : expression.node;
                if (node != null) {
                    expressionsIndexToName.set(node, name);
                }
            });
        }
        const custom = (_c = defExtension.expressions) === null || _c === void 0 ? void 0 : _c.custom;
        if (custom) {
            Object.entries(custom).forEach(([name, expression]) => {
                const { node } = expression;
                expressionsIndexToName.set(node, name);
            });
        }
        // lookAt
        const lookAtIndex = (_e = (_d = defExtension.lookAt) === null || _d === void 0 ? void 0 : _d.node) !== null && _e !== void 0 ? _e : null;
        return { humanoidIndexToName, expressionsIndexToName, lookAtIndex };
    }
    _createBoneWorldMatrixMap(gltf, defExtension) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            // update the entire hierarchy first
            gltf.scene.updateWorldMatrix(false, true);
            const threeNodes = (yield gltf.parser.getDependencies('node'));
            const worldMatrixMap = new Map();
            if (defExtension.humanoid == null) {
                return worldMatrixMap;
            }
            for (const [boneName, humanBone] of Object.entries(defExtension.humanoid.humanBones)) {
                const node = humanBone === null || humanBone === void 0 ? void 0 : humanBone.node;
                if (node != null) {
                    const threeNode = threeNodes[node];
                    worldMatrixMap.set(boneName, threeNode.matrixWorld);
                    if (boneName === 'hips') {
                        worldMatrixMap.set('hipsParent', (_b = (_a = threeNode.parent) === null || _a === void 0 ? void 0 : _a.matrixWorld) !== null && _b !== void 0 ? _b : MAT4_IDENTITY);
                    }
                }
            }
            return worldMatrixMap;
        });
    }
    _parseAnimation(animationClip, defAnimation, nodeMap, worldMatrixMap) {
        const tracks = animationClip.tracks;
        const defChannels = defAnimation.channels;
        const result = new VRMAnimation();
        result.duration = animationClip.duration;
        defChannels.forEach((channel, iChannel) => {
            const { node, path } = channel.target;
            const origTrack = tracks[iChannel];
            if (node == null) {
                return;
            }
            // humanoid
            const boneName = nodeMap.humanoidIndexToName.get(node);
            if (boneName != null) {
                let parentBoneName = VRMHumanBoneParentMap[boneName];
                while (parentBoneName != null && worldMatrixMap.get(parentBoneName) == null) {
                    parentBoneName = VRMHumanBoneParentMap[parentBoneName];
                }
                parentBoneName !== null && parentBoneName !== void 0 ? parentBoneName : (parentBoneName = 'hipsParent');
                if (path === 'translation') {
                    if (boneName !== 'hips') {
                        console.warn(`The loading animation contains a translation track for ${boneName}, which is not permitted in the VRMC_vrm_animation spec. ignoring the track`);
                    }
                    else {
                        const hipsParentWorldMatrix = worldMatrixMap.get('hipsParent');
                        const trackValues = arrayChunk(origTrack.values, 3).flatMap((v) => _v3A.fromArray(v).applyMatrix4(hipsParentWorldMatrix).toArray());
                        const track = origTrack.clone();
                        track.values = new Float32Array(trackValues);
                        result.humanoidTracks.translation.set(boneName, track);
                    }
                }
                else if (path === 'rotation') {
                    // a  = p^-1 * a' * p * c
                    // a' = p * p^-1 * a' * p * c * c^-1 * p^-1
                    //    = p * a * c^-1 * p^-1
                    const worldMatrix = worldMatrixMap.get(boneName);
                    const parentWorldMatrix = worldMatrixMap.get(parentBoneName);
                    worldMatrix.decompose(_v3A, _quatA, _v3A);
                    _quatA.invert();
                    parentWorldMatrix.decompose(_v3A, _quatB, _v3A);
                    const trackValues = arrayChunk(origTrack.values, 4).flatMap((q) => _quatC.fromArray(q).premultiply(_quatB).multiply(_quatA).toArray());
                    const track = origTrack.clone();
                    track.values = new Float32Array(trackValues);
                    result.humanoidTracks.rotation.set(boneName, track);
                }
                else {
                    throw new Error(`Invalid path "${path}"`);
                }
                return;
            }
            // expressions
            const expressionName = nodeMap.expressionsIndexToName.get(node);
            if (expressionName != null) {
                if (path === 'translation') {
                    const times = origTrack.times;
                    const values = new Float32Array(origTrack.values.length / 3);
                    for (let i = 0; i < values.length; i++) {
                        values[i] = origTrack.values[3 * i];
                    }
                    const newTrack = new THREE.NumberKeyframeTrack(`${expressionName}.weight`, times, values);
                    if (vrmExpressionPresetNameSet.has(expressionName)) {
                        result.expressionTracks.preset.set(expressionName, newTrack);
                    }
                    else {
                        result.expressionTracks.custom.set(expressionName, newTrack);
                    }
                }
                else {
                    throw new Error(`Invalid path "${path}"`);
                }
                return;
            }
            // lookAt
            if (node === nodeMap.lookAtIndex) {
                if (path === 'rotation') {
                    result.lookAtTrack = origTrack;
                }
                else {
                    throw new Error(`Invalid path "${path}"`);
                }
            }
        });
        return result;
    }
}

export { VRMAnimation, VRMAnimationLoaderPlugin, VRMLookAtQuaternionProxy, createVRMAnimationClip, createVRMAnimationExpressionTracks, createVRMAnimationHumanoidTracks, createVRMAnimationLookAtTrack };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyZWUtdnJtLWFuaW1hdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3RocmVlLXZybS1jb3JlL2xpYi90aHJlZS12cm0tY29yZS5tb2R1bGUuanMiLCIuLi9zcmMvVlJNTG9va0F0UXVhdGVybmlvblByb3h5LnRzIiwiLi4vc3JjL2NyZWF0ZVZSTUFuaW1hdGlvbkNsaXAudHMiLCIuLi9zcmMvVlJNQW5pbWF0aW9uLnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi4uL3NyYy91dGlscy9hcnJheUNodW5rLnRzIiwiLi4vc3JjL1ZSTUFuaW1hdGlvbkxvYWRlclBsdWdpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEBwaXhpdi90aHJlZS12cm0tY29yZSB2Mi4xLjJcbiAqIFRoZSBpbXBsZW1lbnRhdGlvbiBvZiBjb3JlIGZlYXR1cmVzIG9mIFZSTSwgZm9yIEBwaXhpdi90aHJlZS12cm1cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAtMjAyNCBwaXhpdiBJbmMuXG4gKiBAcGl4aXYvdGhyZWUtdnJtLWNvcmUgaXMgZGlzdHJpYnV0ZWQgdW5kZXIgTUlUIExpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9waXhpdi90aHJlZS12cm0vYmxvYi9yZWxlYXNlL0xJQ0VOU0VcbiAqL1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG4vLyBhbmltYXRpb25NaXhlciDjga7nm6Poppblr77osaHjga/jgIFTY2VuZSDjga7kuK3jgavlhaXjgaPjgabjgYTjgovlv4XopoHjgYzjgYLjgovjgIJcbi8vIOOBneOBruOBn+OCgeOAgeihqOekuuOCquODluOCuOOCp+OCr+ODiOOBp+OBr+OBquOBhOOBkeOCjOOBqeOAgU9iamVjdDNEIOOCkue2meaJv+OBl+OBpiBTY2VuZSDjgavmipXlhaXjgafjgY3jgovjgojjgYbjgavjgZnjgovjgIJcbmNsYXNzIFZSTUV4cHJlc3Npb24gZXh0ZW5kcyBUSFJFRS5PYmplY3QzRCB7XG4gICAgLyoqXG4gICAgICogQSB2YWx1ZSByZXByZXNlbnRzIGhvdyBtdWNoIGl0IHNob3VsZCBvdmVycmlkZSBibGluayBleHByZXNzaW9ucy5cbiAgICAgKiBgMC4wYCA9PSBubyBvdmVycmlkZSBhdCBhbGwsIGAxLjBgID09IGNvbXBsZXRlbHkgYmxvY2sgdGhlIGV4cHJlc3Npb25zLlxuICAgICAqL1xuICAgIGdldCBvdmVycmlkZUJsaW5rQW1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5vdmVycmlkZUJsaW5rID09PSAnYmxvY2snKSB7XG4gICAgICAgICAgICByZXR1cm4gMC4wIDwgdGhpcy53ZWlnaHQgPyAxLjAgOiAwLjA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5vdmVycmlkZUJsaW5rID09PSAnYmxlbmQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy53ZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMC4wO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEEgdmFsdWUgcmVwcmVzZW50cyBob3cgbXVjaCBpdCBzaG91bGQgb3ZlcnJpZGUgbG9va0F0IGV4cHJlc3Npb25zLlxuICAgICAqIGAwLjBgID09IG5vIG92ZXJyaWRlIGF0IGFsbCwgYDEuMGAgPT0gY29tcGxldGVseSBibG9jayB0aGUgZXhwcmVzc2lvbnMuXG4gICAgICovXG4gICAgZ2V0IG92ZXJyaWRlTG9va0F0QW1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5vdmVycmlkZUxvb2tBdCA9PT0gJ2Jsb2NrJykge1xuICAgICAgICAgICAgcmV0dXJuIDAuMCA8IHRoaXMud2VpZ2h0ID8gMS4wIDogMC4wO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMub3ZlcnJpZGVMb29rQXQgPT09ICdibGVuZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAwLjA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQSB2YWx1ZSByZXByZXNlbnRzIGhvdyBtdWNoIGl0IHNob3VsZCBvdmVycmlkZSBtb3V0aCBleHByZXNzaW9ucy5cbiAgICAgKiBgMC4wYCA9PSBubyBvdmVycmlkZSBhdCBhbGwsIGAxLjBgID09IGNvbXBsZXRlbHkgYmxvY2sgdGhlIGV4cHJlc3Npb25zLlxuICAgICAqL1xuICAgIGdldCBvdmVycmlkZU1vdXRoQW1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5vdmVycmlkZU1vdXRoID09PSAnYmxvY2snKSB7XG4gICAgICAgICAgICByZXR1cm4gMC4wIDwgdGhpcy53ZWlnaHQgPyAxLjAgOiAwLjA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5vdmVycmlkZU1vdXRoID09PSAnYmxlbmQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy53ZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMC4wO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKGV4cHJlc3Npb25OYW1lKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY3VycmVudCB3ZWlnaHQgb2YgdGhlIGV4cHJlc3Npb24uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLndlaWdodCA9IDAuMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludGVycHJldCB2YWx1ZXMgZ3JlYXRlciB0aGFuIDAuNSBhcyAxLjAsIG9ydGhlcndpc2UgMC4wLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pc0JpbmFyeSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogU3BlY2lmeSBob3cgdGhlIGV4cHJlc3Npb24gb3ZlcnJpZGVzIGJsaW5rIGV4cHJlc3Npb25zLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vdmVycmlkZUJsaW5rID0gJ25vbmUnO1xuICAgICAgICAvKipcbiAgICAgICAgICogU3BlY2lmeSBob3cgdGhlIGV4cHJlc3Npb24gb3ZlcnJpZGVzIGxvb2tBdCBleHByZXNzaW9ucy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMub3ZlcnJpZGVMb29rQXQgPSAnbm9uZSc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTcGVjaWZ5IGhvdyB0aGUgZXhwcmVzc2lvbiBvdmVycmlkZXMgbW91dGggZXhwcmVzc2lvbnMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm92ZXJyaWRlTW91dGggPSAnbm9uZSc7XG4gICAgICAgIHRoaXMuX2JpbmRzID0gW107XG4gICAgICAgIHRoaXMubmFtZSA9IGBWUk1FeHByZXNzaW9uXyR7ZXhwcmVzc2lvbk5hbWV9YDtcbiAgICAgICAgdGhpcy5leHByZXNzaW9uTmFtZSA9IGV4cHJlc3Npb25OYW1lO1xuICAgICAgICAvLyB0cmF2ZXJzZSDmmYLjga7mlZHmuIjmiYvmrrXjgajjgZfjgaYgT2JqZWN0M0Qg44Gn44Gv44Gq44GE44GT44Go44KS5piO56S644GX44Gm44GK44GPXG4gICAgICAgIHRoaXMudHlwZSA9ICdWUk1FeHByZXNzaW9uJztcbiAgICAgICAgLy8g6KGo56S655uu55qE44Gu44Kq44OW44K444Kn44Kv44OI44Gn44Gv44Gq44GE44Gu44Gn44CB6LKg6I236Lu95rib44Gu44Gf44KB44GrIHZpc2libGUg44KSIGZhbHNlIOOBq+OBl+OBpuOBiuOBj+OAglxuICAgICAgICAvLyDjgZPjgozjgavjgojjgorjgIHjgZPjga7jgqTjg7Pjgrnjgr/jg7Pjgrnjgavlr77jgZnjgovmr47jg5Xjg6zjg7zjg6Djga4gbWF0cml4IOiHquWLleioiOeul+OCkuecgeeVpeOBp+OBjeOCi+OAglxuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICB9XG4gICAgYWRkQmluZChiaW5kKSB7XG4gICAgICAgIHRoaXMuX2JpbmRzLnB1c2goYmluZCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFwcGx5IHdlaWdodCB0byBldmVyeSBhc3NpZ25lZCBibGVuZCBzaGFwZXMuXG4gICAgICogU2hvdWxkIGJlIGNhbGxlZCBldmVyeSBmcmFtZS5cbiAgICAgKi9cbiAgICBhcHBseVdlaWdodChvcHRpb25zKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgbGV0IGFjdHVhbFdlaWdodCA9IHRoaXMuaXNCaW5hcnkgPyAodGhpcy53ZWlnaHQgPD0gMC41ID8gMC4wIDogMS4wKSA6IHRoaXMud2VpZ2h0O1xuICAgICAgICBhY3R1YWxXZWlnaHQgKj0gKF9hID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm11bHRpcGxpZXIpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IDEuMDtcbiAgICAgICAgdGhpcy5fYmluZHMuZm9yRWFjaCgoYmluZCkgPT4gYmluZC5hcHBseVdlaWdodChhY3R1YWxXZWlnaHQpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xlYXIgcHJldmlvdXNseSBhc3NpZ25lZCBibGVuZCBzaGFwZXMuXG4gICAgICovXG4gICAgY2xlYXJBcHBsaWVkV2VpZ2h0KCkge1xuICAgICAgICB0aGlzLl9iaW5kcy5mb3JFYWNoKChiaW5kKSA9PiBiaW5kLmNsZWFyQXBwbGllZFdlaWdodCgpKTtcbiAgICB9XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxudHlwZW9mIFN1cHByZXNzZWRFcnJvciA9PT0gXCJmdW5jdGlvblwiID8gU3VwcHJlc3NlZEVycm9yIDogZnVuY3Rpb24gKGVycm9yLCBzdXBwcmVzc2VkLCBtZXNzYWdlKSB7XHJcbiAgICB2YXIgZSA9IG5ldyBFcnJvcihtZXNzYWdlKTtcclxuICAgIHJldHVybiBlLm5hbWUgPSBcIlN1cHByZXNzZWRFcnJvclwiLCBlLmVycm9yID0gZXJyb3IsIGUuc3VwcHJlc3NlZCA9IHN1cHByZXNzZWQsIGU7XHJcbn07XG5cbmZ1bmN0aW9uIGV4dHJhY3RQcmltaXRpdmVzSW50ZXJuYWwoZ2x0Ziwgbm9kZUluZGV4LCBub2RlKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBjb25zdCBqc29uID0gZ2x0Zi5wYXJzZXIuanNvbjtcbiAgICAvKipcbiAgICAgKiBMZXQncyBsaXN0IHVwIGV2ZXJ5IHBvc3NpYmxlIHBhdHRlcm5zIHRoYXQgcGFyc2VkIGdsdGYgbm9kZXMgd2l0aCBhIG1lc2ggY2FuIGhhdmUsLCxcbiAgICAgKlxuICAgICAqIFwiKlwiIGluZGljYXRlcyB0aGF0IHRob3NlIG1lc2hlcyBzaG91bGQgYmUgbGlzdGVkIHVwIHVzaW5nIHRoaXMgZnVuY3Rpb25cbiAgICAgKlxuICAgICAqICMjIyBBIG5vZGUgd2l0aCBhIChtZXNoLCBhIHNpZ25sZSBwcmltaXRpdmUpXG4gICAgICpcbiAgICAgKiAtIGBUSFJFRS5NZXNoYDogVGhlIG9ubHkgcHJpbWl0aXZlIG9mIHRoZSBtZXNoICpcbiAgICAgKlxuICAgICAqICMjIyBBIG5vZGUgd2l0aCBhIChtZXNoLCBtdWx0aXBsZSBwcmltaXRpdmVzKVxuICAgICAqXG4gICAgICogLSBgVEhSRUUuR3JvdXBgOiBUaGUgcm9vdCBvZiB0aGUgbWVzaFxuICAgICAqICAgLSBgVEhSRUUuTWVzaGA6IEEgcHJpbWl0aXZlIG9mIHRoZSBtZXNoICpcbiAgICAgKiAgIC0gYFRIUkVFLk1lc2hgOiBBIHByaW1pdGl2ZSBvZiB0aGUgbWVzaCAoMikgKlxuICAgICAqXG4gICAgICogIyMjIEEgbm9kZSB3aXRoIGEgKG1lc2gsIG11bHRpcGxlIHByaW1pdGl2ZXMpIEFORCAoYSBjaGlsZCB3aXRoIGEgbWVzaCwgYSBzaW5nbGUgcHJpbWl0aXZlKVxuICAgICAqXG4gICAgICogLSBgVEhSRUUuR3JvdXBgOiBUaGUgcm9vdCBvZiB0aGUgbWVzaFxuICAgICAqICAgLSBgVEhSRUUuTWVzaGA6IEEgcHJpbWl0aXZlIG9mIHRoZSBtZXNoICpcbiAgICAgKiAgIC0gYFRIUkVFLk1lc2hgOiBBIHByaW1pdGl2ZSBvZiB0aGUgbWVzaCAoMikgKlxuICAgICAqICAgLSBgVEhSRUUuTWVzaGA6IEEgcHJpbWl0aXZlIG9mIGEgTUVTSCBPRiBUSEUgQ0hJTERcbiAgICAgKlxuICAgICAqICMjIyBBIG5vZGUgd2l0aCBhIChtZXNoLCBtdWx0aXBsZSBwcmltaXRpdmVzKSBBTkQgKGEgY2hpbGQgd2l0aCBhIG1lc2gsIG11bHRpcGxlIHByaW1pdGl2ZXMpXG4gICAgICpcbiAgICAgKiAtIGBUSFJFRS5Hcm91cGA6IFRoZSByb290IG9mIHRoZSBtZXNoXG4gICAgICogICAtIGBUSFJFRS5NZXNoYDogQSBwcmltaXRpdmUgb2YgdGhlIG1lc2ggKlxuICAgICAqICAgLSBgVEhSRUUuTWVzaGA6IEEgcHJpbWl0aXZlIG9mIHRoZSBtZXNoICgyKSAqXG4gICAgICogICAtIGBUSFJFRS5Hcm91cGA6IFRoZSByb290IG9mIGEgTUVTSCBPRiBUSEUgQ0hJTERcbiAgICAgKiAgICAgLSBgVEhSRUUuTWVzaGA6IEEgcHJpbWl0aXZlIG9mIHRoZSBtZXNoIG9mIHRoZSBjaGlsZFxuICAgICAqICAgICAtIGBUSFJFRS5NZXNoYDogQSBwcmltaXRpdmUgb2YgdGhlIG1lc2ggb2YgdGhlIGNoaWxkICgyKVxuICAgICAqXG4gICAgICogIyMjIEEgbm9kZSB3aXRoIGEgKG1lc2gsIG11bHRpcGxlIHByaW1pdGl2ZXMpIEJVVCB0aGUgbm9kZSBpcyBhIGJvbmVcbiAgICAgKlxuICAgICAqIC0gYFRIUkVFLkJvbmVgOiBUaGUgcm9vdCBvZiB0aGUgbm9kZSwgYXMgYSBib25lXG4gICAgICogICAtIGBUSFJFRS5Hcm91cGA6IFRoZSByb290IG9mIHRoZSBtZXNoXG4gICAgICogICAgIC0gYFRIUkVFLk1lc2hgOiBBIHByaW1pdGl2ZSBvZiB0aGUgbWVzaCAqXG4gICAgICogICAgIC0gYFRIUkVFLk1lc2hgOiBBIHByaW1pdGl2ZSBvZiB0aGUgbWVzaCAoMikgKlxuICAgICAqXG4gICAgICogIyMjIEEgbm9kZSB3aXRoIGEgKG1lc2gsIG11bHRpcGxlIHByaW1pdGl2ZXMpIEFORCAoYSBjaGlsZCB3aXRoIGEgbWVzaCwgbXVsdGlwbGUgcHJpbWl0aXZlcykgQlVUIHRoZSBub2RlIGlzIGEgYm9uZVxuICAgICAqXG4gICAgICogLSBgVEhSRUUuQm9uZWA6IFRoZSByb290IG9mIHRoZSBub2RlLCBhcyBhIGJvbmVcbiAgICAgKiAgIC0gYFRIUkVFLkdyb3VwYDogVGhlIHJvb3Qgb2YgdGhlIG1lc2hcbiAgICAgKiAgICAgLSBgVEhSRUUuTWVzaGA6IEEgcHJpbWl0aXZlIG9mIHRoZSBtZXNoICpcbiAgICAgKiAgICAgLSBgVEhSRUUuTWVzaGA6IEEgcHJpbWl0aXZlIG9mIHRoZSBtZXNoICgyKSAqXG4gICAgICogICAtIGBUSFJFRS5Hcm91cGA6IFRoZSByb290IG9mIGEgTUVTSCBPRiBUSEUgQ0hJTERcbiAgICAgKiAgICAgLSBgVEhSRUUuTWVzaGA6IEEgcHJpbWl0aXZlIG9mIHRoZSBtZXNoIG9mIHRoZSBjaGlsZFxuICAgICAqICAgICAtIGBUSFJFRS5NZXNoYDogQSBwcmltaXRpdmUgb2YgdGhlIG1lc2ggb2YgdGhlIGNoaWxkICgyKVxuICAgICAqXG4gICAgICogLi4uSSB3aWxsIHRha2UgYSBzdHJhdGVneSB0aGF0IHRyYXZlcnNlcyB0aGUgcm9vdCBvZiB0aGUgbm9kZSBhbmQgdGFrZSBmaXJzdCAocHJpbWl0aXZlQ291bnQpIG1lc2hlcy5cbiAgICAgKi9cbiAgICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgbm9kZSBoYXMgYSBtZXNoXG4gICAgY29uc3Qgc2NoZW1hTm9kZSA9IChfYSA9IGpzb24ubm9kZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVtub2RlSW5kZXhdO1xuICAgIGlmIChzY2hlbWFOb2RlID09IG51bGwpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBleHRyYWN0UHJpbWl0aXZlc0ludGVybmFsOiBBdHRlbXB0IHRvIHVzZSBub2Rlc1ske25vZGVJbmRleH1dIG9mIGdsVEYgYnV0IHRoZSBub2RlIGRvZXNuJ3QgZXhpc3RgKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IG1lc2hJbmRleCA9IHNjaGVtYU5vZGUubWVzaDtcbiAgICBpZiAobWVzaEluZGV4ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIC8vIEhvdyBtYW55IHByaW1pdGl2ZXMgdGhlIG1lc2ggaGFzP1xuICAgIGNvbnN0IHNjaGVtYU1lc2ggPSAoX2IgPSBqc29uLm1lc2hlcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iW21lc2hJbmRleF07XG4gICAgaWYgKHNjaGVtYU1lc2ggPT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLndhcm4oYGV4dHJhY3RQcmltaXRpdmVzSW50ZXJuYWw6IEF0dGVtcHQgdG8gdXNlIG1lc2hlc1ske21lc2hJbmRleH1dIG9mIGdsVEYgYnV0IHRoZSBtZXNoIGRvZXNuJ3QgZXhpc3RgKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHByaW1pdGl2ZUNvdW50ID0gc2NoZW1hTWVzaC5wcmltaXRpdmVzLmxlbmd0aDtcbiAgICAvLyBUcmF2ZXJzZSB0aGUgbm9kZSBhbmQgdGFrZSBmaXJzdCAocHJpbWl0aXZlQ291bnQpIG1lc2hlc1xuICAgIGNvbnN0IHByaW1pdGl2ZXMgPSBbXTtcbiAgICBub2RlLnRyYXZlcnNlKChvYmplY3QpID0+IHtcbiAgICAgICAgaWYgKHByaW1pdGl2ZXMubGVuZ3RoIDwgcHJpbWl0aXZlQ291bnQpIHtcbiAgICAgICAgICAgIGlmIChvYmplY3QuaXNNZXNoKSB7XG4gICAgICAgICAgICAgICAgcHJpbWl0aXZlcy5wdXNoKG9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcHJpbWl0aXZlcztcbn1cbi8qKlxuICogRXh0cmFjdCBwcmltaXRpdmVzICggYFRIUkVFLk1lc2hbXWAgKSBvZiBhIG5vZGUgZnJvbSBhIGxvYWRlZCBHTFRGLlxuICogVGhlIG1haW4gcHVycG9zZSBvZiB0aGlzIGZ1bmN0aW9uIGlzIHRvIGRpc3Rpbmd1aXNoIHByaW1pdGl2ZXMgYW5kIGNoaWxkcmVuIGZyb20gYSBub2RlIHRoYXQgaGFzIGJvdGggbWVzaGVzIGFuZCBjaGlsZHJlbi5cbiAqXG4gKiBJdCB1dGlsaXplcyB0aGUgYmVoYXZpb3IgdGhhdCBHTFRGTG9hZGVyIGFkZHMgbWVzaCBwcmltaXRpdmVzIHRvIHRoZSBub2RlIG9iamVjdCAoIGBUSFJFRS5Hcm91cGAgKSBmaXJzdCB0aGVuIGFkZHMgaXRzIGNoaWxkcmVuLlxuICpcbiAqIEBwYXJhbSBnbHRmIEEgR0xURiBvYmplY3QgdGFrZW4gZnJvbSBHTFRGTG9hZGVyXG4gKiBAcGFyYW0gbm9kZUluZGV4IFRoZSBpbmRleCBvZiB0aGUgbm9kZVxuICovXG5mdW5jdGlvbiBnbHRmRXh0cmFjdFByaW1pdGl2ZXNGcm9tTm9kZShnbHRmLCBub2RlSW5kZXgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBub2RlID0geWllbGQgZ2x0Zi5wYXJzZXIuZ2V0RGVwZW5kZW5jeSgnbm9kZScsIG5vZGVJbmRleCk7XG4gICAgICAgIHJldHVybiBleHRyYWN0UHJpbWl0aXZlc0ludGVybmFsKGdsdGYsIG5vZGVJbmRleCwgbm9kZSk7XG4gICAgfSk7XG59XG4vKipcbiAqIEV4dHJhY3QgcHJpbWl0aXZlcyAoIGBUSFJFRS5NZXNoW11gICkgb2Ygbm9kZXMgZnJvbSBhIGxvYWRlZCBHTFRGLlxuICogU2VlIHtAbGluayBnbHRmRXh0cmFjdFByaW1pdGl2ZXNGcm9tTm9kZX0gZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBJdCByZXR1cm5zIGEgbWFwIGZyb20gbm9kZSBpbmRleCB0byBleHRyYWN0aW9uIHJlc3VsdC5cbiAqIElmIGEgbm9kZSBkb2VzIG5vdCBoYXZlIGEgbWVzaCwgdGhlIGVudHJ5IGZvciB0aGUgbm9kZSB3aWxsIG5vdCBiZSBwdXQgaW4gdGhlIHJldHVybmluZyBtYXAuXG4gKlxuICogQHBhcmFtIGdsdGYgQSBHTFRGIG9iamVjdCB0YWtlbiBmcm9tIEdMVEZMb2FkZXJcbiAqL1xuZnVuY3Rpb24gZ2x0ZkV4dHJhY3RQcmltaXRpdmVzRnJvbU5vZGVzKGdsdGYpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBub2RlcyA9IHlpZWxkIGdsdGYucGFyc2VyLmdldERlcGVuZGVuY2llcygnbm9kZScpO1xuICAgICAgICBjb25zdCBtYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIG5vZGVzLmZvckVhY2goKG5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBleHRyYWN0UHJpbWl0aXZlc0ludGVybmFsKGdsdGYsIGluZGV4LCBub2RlKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG1hcC5zZXQoaW5kZXgsIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbWFwO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIEdldCBhIG1hdGVyaWFsIGRlZmluaXRpb24gaW5kZXggb2YgZ2xURiBmcm9tIGFzc29jaWF0ZWQgbWF0ZXJpYWwuXG4gKiBJdCdzIGJhc2ljYWxseSBhIGNvbWF0IGNvZGUgYmV0d2VlbiBUaHJlZS5qcyByMTMzIG9yIGFib3ZlIGFuZCBwcmV2aW91cyB2ZXJzaW9ucy5cbiAqIEBwYXJhbSBwYXJzZXIgR0xURlBhcnNlclxuICogQHBhcmFtIG1hdGVyaWFsIEEgbWF0ZXJpYWwgb2YgZ2x0ZlxuICogQHJldHVybnMgTWF0ZXJpYWwgZGVmaW5pdGlvbiBpbmRleCBvZiBnbFRGXG4gKi9cbmZ1bmN0aW9uIGdsdGZHZXRBc3NvY2lhdGVkTWF0ZXJpYWxJbmRleChwYXJzZXIsIG1hdGVyaWFsKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBjb25zdCB0aHJlZVJldmlzaW9uID0gcGFyc2VJbnQoVEhSRUUuUkVWSVNJT04sIDEwKTtcbiAgICBsZXQgaW5kZXggPSBudWxsO1xuICAgIGlmICh0aHJlZVJldmlzaW9uID49IDEzMykge1xuICAgICAgICBpbmRleCA9IChfYiA9IChfYSA9IHBhcnNlci5hc3NvY2lhdGlvbnMuZ2V0KG1hdGVyaWFsKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm1hdGVyaWFscykgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogbnVsbDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGFzc29jaWF0aW9ucyA9IHBhcnNlci5hc3NvY2lhdGlvbnM7XG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IGFzc29jaWF0aW9ucy5nZXQobWF0ZXJpYWwpO1xuICAgICAgICBpZiAoKHJlZmVyZW5jZSA9PT0gbnVsbCB8fCByZWZlcmVuY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZmVyZW5jZS50eXBlKSA9PT0gJ21hdGVyaWFscycpIHtcbiAgICAgICAgICAgIGluZGV4ID0gcmVmZXJlbmNlLmluZGV4O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpbmRleDtcbn1cblxuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG5jb25zdCBWUk1FeHByZXNzaW9uUHJlc2V0TmFtZSA9IHtcbiAgICBBYTogJ2FhJyxcbiAgICBJaDogJ2loJyxcbiAgICBPdTogJ291JyxcbiAgICBFZTogJ2VlJyxcbiAgICBPaDogJ29oJyxcbiAgICBCbGluazogJ2JsaW5rJyxcbiAgICBIYXBweTogJ2hhcHB5JyxcbiAgICBBbmdyeTogJ2FuZ3J5JyxcbiAgICBTYWQ6ICdzYWQnLFxuICAgIFJlbGF4ZWQ6ICdyZWxheGVkJyxcbiAgICBMb29rVXA6ICdsb29rVXAnLFxuICAgIFN1cnByaXNlZDogJ3N1cnByaXNlZCcsXG4gICAgTG9va0Rvd246ICdsb29rRG93bicsXG4gICAgTG9va0xlZnQ6ICdsb29rTGVmdCcsXG4gICAgTG9va1JpZ2h0OiAnbG9va1JpZ2h0JyxcbiAgICBCbGlua0xlZnQ6ICdibGlua0xlZnQnLFxuICAgIEJsaW5rUmlnaHQ6ICdibGlua1JpZ2h0JyxcbiAgICBOZXV0cmFsOiAnbmV1dHJhbCcsXG59O1xuXG4vKipcbiAqIENsYW1wIHRoZSBpbnB1dCB2YWx1ZSB3aXRoaW4gWzAuMCAtIDEuMF0uXG4gKlxuICogQHBhcmFtIHZhbHVlIFRoZSBpbnB1dCB2YWx1ZVxuICovXG5mdW5jdGlvbiBzYXR1cmF0ZSh2YWx1ZSkge1xuICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbih2YWx1ZSwgMS4wKSwgMC4wKTtcbn1cblxuY2xhc3MgVlJNRXhwcmVzc2lvbk1hbmFnZXIge1xuICAgIGdldCBleHByZXNzaW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4cHJlc3Npb25zLmNvbmNhdCgpO1xuICAgIH1cbiAgICBnZXQgZXhwcmVzc2lvbk1hcCgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2V4cHJlc3Npb25NYXApO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIG1hcCBmcm9tIG5hbWUgdG8gZXhwcmVzc2lvbiwgYnV0IGV4Y2x1ZGluZyBjdXN0b20gZXhwcmVzc2lvbnMuXG4gICAgICovXG4gICAgZ2V0IHByZXNldEV4cHJlc3Npb25NYXAoKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgICAgICBjb25zdCBwcmVzZXROYW1lU2V0ID0gbmV3IFNldChPYmplY3QudmFsdWVzKFZSTUV4cHJlc3Npb25QcmVzZXROYW1lKSk7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuX2V4cHJlc3Npb25NYXApLmZvckVhY2goKFtuYW1lLCBleHByZXNzaW9uXSkgPT4ge1xuICAgICAgICAgICAgaWYgKHByZXNldE5hbWVTZXQuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W25hbWVdID0gZXhwcmVzc2lvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEEgbWFwIGZyb20gbmFtZSB0byBleHByZXNzaW9uLCBidXQgZXhjbHVkaW5nIHByZXNldCBleHByZXNzaW9ucy5cbiAgICAgKi9cbiAgICBnZXQgY3VzdG9tRXhwcmVzc2lvbk1hcCgpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgICAgIGNvbnN0IHByZXNldE5hbWVTZXQgPSBuZXcgU2V0KE9iamVjdC52YWx1ZXMoVlJNRXhwcmVzc2lvblByZXNldE5hbWUpKTtcbiAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5fZXhwcmVzc2lvbk1hcCkuZm9yRWFjaCgoW25hbWUsIGV4cHJlc3Npb25dKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXByZXNldE5hbWVTZXQuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W25hbWVdID0gZXhwcmVzc2lvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgVlJNRXhwcmVzc2lvbk1hbmFnZXJ9LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBzZXQgb2YgbmFtZSBvciBwcmVzZXQgbmFtZSBvZiBleHByZXNzaW9ucyB0aGF0IHdpbGwgYmUgb3ZlcnJpZGRlbiBieSB7QGxpbmsgVlJNRXhwcmVzc2lvbi5vdmVycmlkZUJsaW5rfS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYmxpbmtFeHByZXNzaW9uTmFtZXMgPSBbJ2JsaW5rJywgJ2JsaW5rTGVmdCcsICdibGlua1JpZ2h0J107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHNldCBvZiBuYW1lIG9yIHByZXNldCBuYW1lIG9mIGV4cHJlc3Npb25zIHRoYXQgd2lsbCBiZSBvdmVycmlkZGVuIGJ5IHtAbGluayBWUk1FeHByZXNzaW9uLm92ZXJyaWRlTG9va0F0fS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubG9va0F0RXhwcmVzc2lvbk5hbWVzID0gWydsb29rTGVmdCcsICdsb29rUmlnaHQnLCAnbG9va1VwJywgJ2xvb2tEb3duJ107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHNldCBvZiBuYW1lIG9yIHByZXNldCBuYW1lIG9mIGV4cHJlc3Npb25zIHRoYXQgd2lsbCBiZSBvdmVycmlkZGVuIGJ5IHtAbGluayBWUk1FeHByZXNzaW9uLm92ZXJyaWRlTW91dGh9LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tb3V0aEV4cHJlc3Npb25OYW1lcyA9IFsnYWEnLCAnZWUnLCAnaWgnLCAnb2gnLCAnb3UnXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgc2V0IG9mIHtAbGluayBWUk1FeHByZXNzaW9ufS5cbiAgICAgICAgICogV2hlbiB5b3Ugd2FudCB0byByZWdpc3RlciBleHByZXNzaW9ucywgdXNlIHtAbGluayByZWdpc3RlckV4cHJlc3Npb259XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9leHByZXNzaW9ucyA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBtYXAgZnJvbSBuYW1lIHRvIGV4cHJlc3Npb24uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9leHByZXNzaW9uTWFwID0ge307XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29weSB0aGUgZ2l2ZW4ge0BsaW5rIFZSTUV4cHJlc3Npb25NYW5hZ2VyfSBpbnRvIHRoaXMgb25lLlxuICAgICAqIEBwYXJhbSBzb3VyY2UgVGhlIHtAbGluayBWUk1FeHByZXNzaW9uTWFuYWdlcn0geW91IHdhbnQgdG8gY29weVxuICAgICAqIEByZXR1cm5zIHRoaXNcbiAgICAgKi9cbiAgICBjb3B5KHNvdXJjZSkge1xuICAgICAgICAvLyBmaXJzdCB1bnJlZ2lzdGVyIGFsbCB0aGUgZXhwcmVzc2lvbiBpdCBoYXNcbiAgICAgICAgY29uc3QgZXhwcmVzc2lvbnMgPSB0aGlzLl9leHByZXNzaW9ucy5jb25jYXQoKTtcbiAgICAgICAgZXhwcmVzc2lvbnMuZm9yRWFjaCgoZXhwcmVzc2lvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy51bnJlZ2lzdGVyRXhwcmVzc2lvbihleHByZXNzaW9uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHRoZW4gcmVnaXN0ZXIgYWxsIHRoZSBleHByZXNzaW9uIG9mIHRoZSBzb3VyY2VcbiAgICAgICAgc291cmNlLl9leHByZXNzaW9ucy5mb3JFYWNoKChleHByZXNzaW9uKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRXhwcmVzc2lvbihleHByZXNzaW9uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNvcHkgcmVtYWluaW5nIG1lbWJlcnNcbiAgICAgICAgdGhpcy5ibGlua0V4cHJlc3Npb25OYW1lcyA9IHNvdXJjZS5ibGlua0V4cHJlc3Npb25OYW1lcy5jb25jYXQoKTtcbiAgICAgICAgdGhpcy5sb29rQXRFeHByZXNzaW9uTmFtZXMgPSBzb3VyY2UubG9va0F0RXhwcmVzc2lvbk5hbWVzLmNvbmNhdCgpO1xuICAgICAgICB0aGlzLm1vdXRoRXhwcmVzc2lvbk5hbWVzID0gc291cmNlLm1vdXRoRXhwcmVzc2lvbk5hbWVzLmNvbmNhdCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGNsb25lIG9mIHRoaXMge0BsaW5rIFZSTUV4cHJlc3Npb25NYW5hZ2VyfS5cbiAgICAgKiBAcmV0dXJucyBDb3BpZWQge0BsaW5rIFZSTUV4cHJlc3Npb25NYW5hZ2VyfVxuICAgICAqL1xuICAgIGNsb25lKCkge1xuICAgICAgICByZXR1cm4gbmV3IFZSTUV4cHJlc3Npb25NYW5hZ2VyKCkuY29weSh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJuIGEgcmVnaXN0ZXJlZCBleHByZXNzaW9uLlxuICAgICAqIElmIGl0IGNhbm5vdCBmaW5kIGFuIGV4cHJlc3Npb24sIGl0IHdpbGwgcmV0dXJuIGBudWxsYCBpbnN0ZWFkLlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWUgTmFtZSBvciBwcmVzZXQgbmFtZSBvZiB0aGUgZXhwcmVzc2lvblxuICAgICAqL1xuICAgIGdldEV4cHJlc3Npb24obmFtZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiAoX2EgPSB0aGlzLl9leHByZXNzaW9uTWFwW25hbWVdKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBhbiBleHByZXNzaW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIGV4cHJlc3Npb24ge0BsaW5rIFZSTUV4cHJlc3Npb259IHRoYXQgZGVzY3JpYmVzIHRoZSBleHByZXNzaW9uXG4gICAgICovXG4gICAgcmVnaXN0ZXJFeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgICAgICAgdGhpcy5fZXhwcmVzc2lvbnMucHVzaChleHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy5fZXhwcmVzc2lvbk1hcFtleHByZXNzaW9uLmV4cHJlc3Npb25OYW1lXSA9IGV4cHJlc3Npb247XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVucmVnaXN0ZXIgYW4gZXhwcmVzc2lvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBleHByZXNzaW9uIFRoZSBleHByZXNzaW9uIHlvdSB3YW50IHRvIHVucmVnaXN0ZXJcbiAgICAgKi9cbiAgICB1bnJlZ2lzdGVyRXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fZXhwcmVzc2lvbnMuaW5kZXhPZihleHByZXNzaW9uKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdWUk1FeHByZXNzaW9uTWFuYWdlcjogVGhlIHNwZWNpZmllZCBleHByZXNzaW9ucyBpcyBub3QgcmVnaXN0ZXJlZCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2V4cHJlc3Npb25zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9leHByZXNzaW9uTWFwW2V4cHJlc3Npb24uZXhwcmVzc2lvbk5hbWVdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnQgd2VpZ2h0IG9mIHRoZSBzcGVjaWZpZWQgZXhwcmVzc2lvbi5cbiAgICAgKiBJZiBpdCBkb2Vzbid0IGhhdmUgYW4gZXhwcmVzc2lvbiBvZiBnaXZlbiBuYW1lLCBpdCB3aWxsIHJldHVybiBgbnVsbGAgaW5zdGVhZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGV4cHJlc3Npb25cbiAgICAgKi9cbiAgICBnZXRWYWx1ZShuYW1lKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgZXhwcmVzc2lvbiA9IHRoaXMuZ2V0RXhwcmVzc2lvbihuYW1lKTtcbiAgICAgICAgcmV0dXJuIChfYSA9IGV4cHJlc3Npb24gPT09IG51bGwgfHwgZXhwcmVzc2lvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXhwcmVzc2lvbi53ZWlnaHQpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCBhIHdlaWdodCB0byB0aGUgc3BlY2lmaWVkIGV4cHJlc3Npb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBleHByZXNzaW9uXG4gICAgICogQHBhcmFtIHdlaWdodCBXZWlnaHRcbiAgICAgKi9cbiAgICBzZXRWYWx1ZShuYW1lLCB3ZWlnaHQpIHtcbiAgICAgICAgY29uc3QgZXhwcmVzc2lvbiA9IHRoaXMuZ2V0RXhwcmVzc2lvbihuYW1lKTtcbiAgICAgICAgaWYgKGV4cHJlc3Npb24pIHtcbiAgICAgICAgICAgIGV4cHJlc3Npb24ud2VpZ2h0ID0gc2F0dXJhdGUod2VpZ2h0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgYSB0cmFjayBuYW1lIG9mIHNwZWNpZmllZCBleHByZXNzaW9uLlxuICAgICAqIFRoaXMgdHJhY2sgbmFtZSBpcyBuZWVkZWQgdG8gbWFuaXB1bGF0ZSBpdHMgZXhwcmVzc2lvbiB2aWEga2V5ZnJhbWUgYW5pbWF0aW9ucy5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlIE1hbmlwdWxhdGUgYW4gZXhwcmVzc2lvbiB1c2luZyBrZXlmcmFtZSBhbmltYXRpb25cbiAgICAgKiBgYGBqc1xuICAgICAqIGNvbnN0IHRyYWNrTmFtZSA9IHZybS5leHByZXNzaW9uTWFuYWdlci5nZXRFeHByZXNzaW9uVHJhY2tOYW1lKCAnYmxpbmsnICk7XG4gICAgICogY29uc3QgdHJhY2sgPSBuZXcgVEhSRUUuTnVtYmVyS2V5ZnJhbWVUcmFjayhcbiAgICAgKiAgIG5hbWUsXG4gICAgICogICBbIDAuMCwgMC41LCAxLjAgXSwgLy8gdGltZXNcbiAgICAgKiAgIFsgMC4wLCAxLjAsIDAuMCBdIC8vIHZhbHVlc1xuICAgICAqICk7XG4gICAgICpcbiAgICAgKiBjb25zdCBjbGlwID0gbmV3IFRIUkVFLkFuaW1hdGlvbkNsaXAoXG4gICAgICogICAnYmxpbmsnLCAvLyBuYW1lXG4gICAgICogICAxLjAsIC8vIGR1cmF0aW9uXG4gICAgICogICBbIHRyYWNrIF0gLy8gdHJhY2tzXG4gICAgICogKTtcbiAgICAgKlxuICAgICAqIGNvbnN0IG1peGVyID0gbmV3IFRIUkVFLkFuaW1hdGlvbk1peGVyKCB2cm0uc2NlbmUgKTtcbiAgICAgKiBjb25zdCBhY3Rpb24gPSBtaXhlci5jbGlwQWN0aW9uKCBjbGlwICk7XG4gICAgICogYWN0aW9uLnBsYXkoKTtcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGV4cHJlc3Npb25cbiAgICAgKi9cbiAgICBnZXRFeHByZXNzaW9uVHJhY2tOYW1lKG5hbWUpIHtcbiAgICAgICAgY29uc3QgZXhwcmVzc2lvbiA9IHRoaXMuZ2V0RXhwcmVzc2lvbihuYW1lKTtcbiAgICAgICAgcmV0dXJuIGV4cHJlc3Npb24gPyBgJHtleHByZXNzaW9uLm5hbWV9LndlaWdodGAgOiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgZXZlcnkgZXhwcmVzc2lvbnMuXG4gICAgICovXG4gICAgdXBkYXRlKCkge1xuICAgICAgICAvLyBzZWUgaG93IG11Y2ggd2Ugc2hvdWxkIG92ZXJyaWRlIGNlcnRhaW4gZXhwcmVzc2lvbnNcbiAgICAgICAgY29uc3Qgd2VpZ2h0TXVsdGlwbGllcnMgPSB0aGlzLl9jYWxjdWxhdGVXZWlnaHRNdWx0aXBsaWVycygpO1xuICAgICAgICAvLyByZXNldCBleHByZXNzaW9uIGJpbmRzIGZpcnN0XG4gICAgICAgIHRoaXMuX2V4cHJlc3Npb25zLmZvckVhY2goKGV4cHJlc3Npb24pID0+IHtcbiAgICAgICAgICAgIGV4cHJlc3Npb24uY2xlYXJBcHBsaWVkV2VpZ2h0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyB0aGVuIGFwcGx5IGJpbmRzXG4gICAgICAgIHRoaXMuX2V4cHJlc3Npb25zLmZvckVhY2goKGV4cHJlc3Npb24pID0+IHtcbiAgICAgICAgICAgIGxldCBtdWx0aXBsaWVyID0gMS4wO1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGV4cHJlc3Npb24uZXhwcmVzc2lvbk5hbWU7XG4gICAgICAgICAgICBpZiAodGhpcy5ibGlua0V4cHJlc3Npb25OYW1lcy5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIG11bHRpcGxpZXIgKj0gd2VpZ2h0TXVsdGlwbGllcnMuYmxpbms7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5sb29rQXRFeHByZXNzaW9uTmFtZXMuaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBtdWx0aXBsaWVyICo9IHdlaWdodE11bHRpcGxpZXJzLmxvb2tBdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm1vdXRoRXhwcmVzc2lvbk5hbWVzLmluZGV4T2YobmFtZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgbXVsdGlwbGllciAqPSB3ZWlnaHRNdWx0aXBsaWVycy5tb3V0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV4cHJlc3Npb24uYXBwbHlXZWlnaHQoeyBtdWx0aXBsaWVyIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIHN1bSBvZiBvdmVycmlkZSBhbW91bnRzIHRvIHNlZSBob3cgbXVjaCB3ZSBzaG91bGQgbXVsdGlwbHkgd2VpZ2h0cyBvZiBjZXJ0YWluIGV4cHJlc3Npb25zLlxuICAgICAqL1xuICAgIF9jYWxjdWxhdGVXZWlnaHRNdWx0aXBsaWVycygpIHtcbiAgICAgICAgbGV0IGJsaW5rID0gMS4wO1xuICAgICAgICBsZXQgbG9va0F0ID0gMS4wO1xuICAgICAgICBsZXQgbW91dGggPSAxLjA7XG4gICAgICAgIHRoaXMuX2V4cHJlc3Npb25zLmZvckVhY2goKGV4cHJlc3Npb24pID0+IHtcbiAgICAgICAgICAgIGJsaW5rIC09IGV4cHJlc3Npb24ub3ZlcnJpZGVCbGlua0Ftb3VudDtcbiAgICAgICAgICAgIGxvb2tBdCAtPSBleHByZXNzaW9uLm92ZXJyaWRlTG9va0F0QW1vdW50O1xuICAgICAgICAgICAgbW91dGggLT0gZXhwcmVzc2lvbi5vdmVycmlkZU1vdXRoQW1vdW50O1xuICAgICAgICB9KTtcbiAgICAgICAgYmxpbmsgPSBNYXRoLm1heCgwLjAsIGJsaW5rKTtcbiAgICAgICAgbG9va0F0ID0gTWF0aC5tYXgoMC4wLCBsb29rQXQpO1xuICAgICAgICBtb3V0aCA9IE1hdGgubWF4KDAuMCwgbW91dGgpO1xuICAgICAgICByZXR1cm4geyBibGluaywgbG9va0F0LCBtb3V0aCB9O1xuICAgIH1cbn1cblxuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG5jb25zdCBWUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvclR5cGUgPSB7XG4gICAgQ29sb3I6ICdjb2xvcicsXG4gICAgRW1pc3Npb25Db2xvcjogJ2VtaXNzaW9uQ29sb3InLFxuICAgIFNoYWRlQ29sb3I6ICdzaGFkZUNvbG9yJyxcbiAgICBNYXRjYXBDb2xvcjogJ21hdGNhcENvbG9yJyxcbiAgICBSaW1Db2xvcjogJ3JpbUNvbG9yJyxcbiAgICBPdXRsaW5lQ29sb3I6ICdvdXRsaW5lQ29sb3InLFxufTtcbmNvbnN0IHYwRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JNYXAgPSB7XG4gICAgX0NvbG9yOiBWUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvclR5cGUuQ29sb3IsXG4gICAgX0VtaXNzaW9uQ29sb3I6IFZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yVHlwZS5FbWlzc2lvbkNvbG9yLFxuICAgIF9TaGFkZUNvbG9yOiBWUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvclR5cGUuU2hhZGVDb2xvcixcbiAgICBfUmltQ29sb3I6IFZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yVHlwZS5SaW1Db2xvcixcbiAgICBfT3V0bGluZUNvbG9yOiBWUk1FeHByZXNzaW9uTWF0ZXJpYWxDb2xvclR5cGUuT3V0bGluZUNvbG9yLFxufTtcblxuY29uc3QgX2NvbG9yID0gbmV3IFRIUkVFLkNvbG9yKCk7XG4vKipcbiAqIEEgYmluZCBvZiBleHByZXNzaW9uIGluZmx1ZW5jZXMgdG8gYSBtYXRlcmlhbCBjb2xvci5cbiAqL1xuY2xhc3MgVlJNRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JCaW5kIHtcbiAgICBjb25zdHJ1Y3Rvcih7IG1hdGVyaWFsLCB0eXBlLCB0YXJnZXRWYWx1ZSwgdGFyZ2V0QWxwaGEsIH0pIHtcbiAgICAgICAgdGhpcy5tYXRlcmlhbCA9IG1hdGVyaWFsO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLnRhcmdldFZhbHVlID0gdGFyZ2V0VmFsdWU7XG4gICAgICAgIHRoaXMudGFyZ2V0QWxwaGEgPSB0YXJnZXRBbHBoYSAhPT0gbnVsbCAmJiB0YXJnZXRBbHBoYSAhPT0gdm9pZCAwID8gdGFyZ2V0QWxwaGEgOiAxLjA7XG4gICAgICAgIC8vIGluaXQgYmluZCBzdGF0ZVxuICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuX2luaXRDb2xvckJpbmRTdGF0ZSgpO1xuICAgICAgICBjb25zdCBhbHBoYSA9IHRoaXMuX2luaXRBbHBoYUJpbmRTdGF0ZSgpO1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IHsgY29sb3IsIGFscGhhIH07XG4gICAgfVxuICAgIGFwcGx5V2VpZ2h0KHdlaWdodCkge1xuICAgICAgICBjb25zdCB7IGNvbG9yLCBhbHBoYSB9ID0gdGhpcy5fc3RhdGU7XG4gICAgICAgIGlmIChjb2xvciAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCB7IHByb3BlcnR5TmFtZSwgZGVsdGFWYWx1ZSB9ID0gY29sb3I7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLm1hdGVyaWFsW3Byb3BlcnR5TmFtZV07XG4gICAgICAgICAgICBpZiAodGFyZ2V0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRhcmdldC5hZGQoX2NvbG9yLmNvcHkoZGVsdGFWYWx1ZSkubXVsdGlwbHlTY2FsYXIod2VpZ2h0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFscGhhICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgcHJvcGVydHlOYW1lLCBkZWx0YVZhbHVlIH0gPSBhbHBoYTtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMubWF0ZXJpYWxbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgICAgIGlmICh0YXJnZXQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXRlcmlhbFtwcm9wZXJ0eU5hbWVdICs9IGRlbHRhVmFsdWUgKiB3ZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xlYXJBcHBsaWVkV2VpZ2h0KCkge1xuICAgICAgICBjb25zdCB7IGNvbG9yLCBhbHBoYSB9ID0gdGhpcy5fc3RhdGU7XG4gICAgICAgIGlmIChjb2xvciAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCB7IHByb3BlcnR5TmFtZSwgaW5pdGlhbFZhbHVlIH0gPSBjb2xvcjtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMubWF0ZXJpYWxbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgICAgIGlmICh0YXJnZXQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNvcHkoaW5pdGlhbFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYWxwaGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgeyBwcm9wZXJ0eU5hbWUsIGluaXRpYWxWYWx1ZSB9ID0gYWxwaGE7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLm1hdGVyaWFsW3Byb3BlcnR5TmFtZV07XG4gICAgICAgICAgICBpZiAodGFyZ2V0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWF0ZXJpYWxbcHJvcGVydHlOYW1lXSA9IGluaXRpYWxWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBfaW5pdENvbG9yQmluZFN0YXRlKCkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgY29uc3QgeyBtYXRlcmlhbCwgdHlwZSwgdGFyZ2V0VmFsdWUgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZU1hcCA9IHRoaXMuX2dldFByb3BlcnR5TmFtZU1hcCgpO1xuICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSAoX2IgPSAoX2EgPSBwcm9wZXJ0eU5hbWVNYXAgPT09IG51bGwgfHwgcHJvcGVydHlOYW1lTWFwID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wZXJ0eU5hbWVNYXBbdHlwZV0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVswXSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogbnVsbDtcbiAgICAgICAgaWYgKHByb3BlcnR5TmFtZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFRyaWVkIHRvIGFkZCBhIG1hdGVyaWFsIGNvbG9yIGJpbmQgdG8gdGhlIG1hdGVyaWFsICR7KF9jID0gbWF0ZXJpYWwubmFtZSkgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogJyhubyBuYW1lKSd9LCB0aGUgdHlwZSAke3R5cGV9IGJ1dCB0aGUgbWF0ZXJpYWwgb3IgdGhlIHR5cGUgaXMgbm90IHN1cHBvcnRlZC5gKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IG1hdGVyaWFsW3Byb3BlcnR5TmFtZV07XG4gICAgICAgIGNvbnN0IGluaXRpYWxWYWx1ZSA9IHRhcmdldC5jbG9uZSgpO1xuICAgICAgICAvLyDosqDjga7lgKTjgpLkv53mjIHjgZnjgovjgZ/jgoHjgatDb2xvci5zdWLjgpLkvb/jgo/jgZrjgavlt67liIbjgpLoqIjnrpfjgZnjgotcbiAgICAgICAgY29uc3QgZGVsdGFWYWx1ZSA9IG5ldyBUSFJFRS5Db2xvcih0YXJnZXRWYWx1ZS5yIC0gaW5pdGlhbFZhbHVlLnIsIHRhcmdldFZhbHVlLmcgLSBpbml0aWFsVmFsdWUuZywgdGFyZ2V0VmFsdWUuYiAtIGluaXRpYWxWYWx1ZS5iKTtcbiAgICAgICAgcmV0dXJuIHsgcHJvcGVydHlOYW1lLCBpbml0aWFsVmFsdWUsIGRlbHRhVmFsdWUgfTtcbiAgICB9XG4gICAgX2luaXRBbHBoYUJpbmRTdGF0ZSgpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgIGNvbnN0IHsgbWF0ZXJpYWwsIHR5cGUsIHRhcmdldEFscGhhIH0gPSB0aGlzO1xuICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWVNYXAgPSB0aGlzLl9nZXRQcm9wZXJ0eU5hbWVNYXAoKTtcbiAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lID0gKF9iID0gKF9hID0gcHJvcGVydHlOYW1lTWFwID09PSBudWxsIHx8IHByb3BlcnR5TmFtZU1hcCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcGVydHlOYW1lTWFwW3R5cGVdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbMV0pICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IG51bGw7XG4gICAgICAgIGlmIChwcm9wZXJ0eU5hbWUgPT0gbnVsbCAmJiB0YXJnZXRBbHBoYSAhPT0gMS4wKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFRyaWVkIHRvIGFkZCBhIG1hdGVyaWFsIGFscGhhIGJpbmQgdG8gdGhlIG1hdGVyaWFsICR7KF9jID0gbWF0ZXJpYWwubmFtZSkgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogJyhubyBuYW1lKSd9LCB0aGUgdHlwZSAke3R5cGV9IGJ1dCB0aGUgbWF0ZXJpYWwgb3IgdGhlIHR5cGUgZG9lcyBub3Qgc3VwcG9ydCBhbHBoYS5gKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wZXJ0eU5hbWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5pdGlhbFZhbHVlID0gbWF0ZXJpYWxbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgY29uc3QgZGVsdGFWYWx1ZSA9IHRhcmdldEFscGhhIC0gaW5pdGlhbFZhbHVlO1xuICAgICAgICByZXR1cm4geyBwcm9wZXJ0eU5hbWUsIGluaXRpYWxWYWx1ZSwgZGVsdGFWYWx1ZSB9O1xuICAgIH1cbiAgICBfZ2V0UHJvcGVydHlOYW1lTWFwKCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICByZXR1cm4gKChfYiA9IChfYSA9IE9iamVjdC5lbnRyaWVzKFZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yQmluZC5fcHJvcGVydHlOYW1lTWFwTWFwKS5maW5kKChbZGlzdGluZ3Vpc2hlcl0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hdGVyaWFsW2Rpc3Rpbmd1aXNoZXJdID09PSB0cnVlO1xuICAgICAgICB9KSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hWzFdKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBudWxsKTtcbiAgICB9XG59XG4vKipcbiAqIE1hcHBpbmcgb2YgcHJvcGVydHkgbmFtZXMgZnJvbSBWUk1DL21hdGVyaWFsQ29sb3JCaW5kcy50eXBlIHRvIHRocmVlLmpzL01hdGVyaWFsLlxuICogVGhlIGZpcnN0IGVsZW1lbnQgc3RhbmRzIGZvciBjb2xvciBjaGFubmVscywgdGhlIHNlY29uZCBlbGVtZW50IHN0YW5kcyBmb3IgdGhlIGFscGhhIGNoYW5uZWwuXG4gKiBUaGUgc2Vjb25kIGVsZW1lbnQgY2FuIGJlIG51bGwgaWYgdGhlIHRhcmdldCBwcm9wZXJ0eSBkb2Vzbid0IGV4aXN0LlxuICovXG4vLyBUT0RPOiBXZSBtaWdodCB3YW50IHRvIHVzZSB0aGUgYHNhdGlzZmllc2Agb3BlcmF0b3Igb25jZSB3ZSBidW1wIFRTIHRvIDQuOSBvciBoaWdoZXJcbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL3BpeGl2L3RocmVlLXZybS9wdWxsLzEzMjMjZGlzY3Vzc2lvbl9yMTM3NDAyMDAzNVxuVlJNRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JCaW5kLl9wcm9wZXJ0eU5hbWVNYXBNYXAgPSB7XG4gICAgaXNNZXNoU3RhbmRhcmRNYXRlcmlhbDoge1xuICAgICAgICBjb2xvcjogWydjb2xvcicsICdvcGFjaXR5J10sXG4gICAgICAgIGVtaXNzaW9uQ29sb3I6IFsnZW1pc3NpdmUnLCBudWxsXSxcbiAgICB9LFxuICAgIGlzTWVzaEJhc2ljTWF0ZXJpYWw6IHtcbiAgICAgICAgY29sb3I6IFsnY29sb3InLCAnb3BhY2l0eSddLFxuICAgIH0sXG4gICAgaXNNVG9vbk1hdGVyaWFsOiB7XG4gICAgICAgIGNvbG9yOiBbJ2NvbG9yJywgJ29wYWNpdHknXSxcbiAgICAgICAgZW1pc3Npb25Db2xvcjogWydlbWlzc2l2ZScsIG51bGxdLFxuICAgICAgICBvdXRsaW5lQ29sb3I6IFsnb3V0bGluZUNvbG9yRmFjdG9yJywgbnVsbF0sXG4gICAgICAgIG1hdGNhcENvbG9yOiBbJ21hdGNhcEZhY3RvcicsIG51bGxdLFxuICAgICAgICByaW1Db2xvcjogWydwYXJhbWV0cmljUmltQ29sb3JGYWN0b3InLCBudWxsXSxcbiAgICAgICAgc2hhZGVDb2xvcjogWydzaGFkZUNvbG9yRmFjdG9yJywgbnVsbF0sXG4gICAgfSxcbn07XG5cbi8qKlxuICogQSBiaW5kIG9mIHtAbGluayBWUk1FeHByZXNzaW9ufSBpbmZsdWVuY2VzIHRvIG1vcnBoIHRhcmdldHMuXG4gKi9cbmNsYXNzIFZSTUV4cHJlc3Npb25Nb3JwaFRhcmdldEJpbmQge1xuICAgIGNvbnN0cnVjdG9yKHsgcHJpbWl0aXZlcywgaW5kZXgsIHdlaWdodCwgfSkge1xuICAgICAgICB0aGlzLnByaW1pdGl2ZXMgPSBwcmltaXRpdmVzO1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMud2VpZ2h0ID0gd2VpZ2h0O1xuICAgIH1cbiAgICBhcHBseVdlaWdodCh3ZWlnaHQpIHtcbiAgICAgICAgdGhpcy5wcmltaXRpdmVzLmZvckVhY2goKG1lc2gpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGlmICgoKF9hID0gbWVzaC5tb3JwaFRhcmdldEluZmx1ZW5jZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVt0aGlzLmluZGV4XSkgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG1lc2gubW9ycGhUYXJnZXRJbmZsdWVuY2VzW3RoaXMuaW5kZXhdICs9IHRoaXMud2VpZ2h0ICogd2VpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2xlYXJBcHBsaWVkV2VpZ2h0KCkge1xuICAgICAgICB0aGlzLnByaW1pdGl2ZXMuZm9yRWFjaCgobWVzaCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgaWYgKCgoX2EgPSBtZXNoLm1vcnBoVGFyZ2V0SW5mbHVlbmNlcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hW3RoaXMuaW5kZXhdKSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbWVzaC5tb3JwaFRhcmdldEluZmx1ZW5jZXNbdGhpcy5pbmRleF0gPSAwLjA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY29uc3QgX3YyID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcbi8qKlxuICogQSBiaW5kIG9mIGV4cHJlc3Npb24gaW5mbHVlbmNlcyB0byB0ZXh0dXJlIHRyYW5zZm9ybXMuXG4gKi9cbmNsYXNzIFZSTUV4cHJlc3Npb25UZXh0dXJlVHJhbnNmb3JtQmluZCB7XG4gICAgY29uc3RydWN0b3IoeyBtYXRlcmlhbCwgc2NhbGUsIG9mZnNldCwgfSkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICB0aGlzLm1hdGVyaWFsID0gbWF0ZXJpYWw7XG4gICAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZTtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZXMgPSAoX2EgPSBPYmplY3QuZW50cmllcyhWUk1FeHByZXNzaW9uVGV4dHVyZVRyYW5zZm9ybUJpbmQuX3Byb3BlcnR5TmFtZXNNYXApLmZpbmQoKFtkaXN0aW5ndWlzaGVyXSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG1hdGVyaWFsW2Rpc3Rpbmd1aXNoZXJdID09PSB0cnVlO1xuICAgICAgICB9KSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hWzFdO1xuICAgICAgICBpZiAocHJvcGVydHlOYW1lcyA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFRyaWVkIHRvIGFkZCBhIHRleHR1cmUgdHJhbnNmb3JtIGJpbmQgdG8gdGhlIG1hdGVyaWFsICR7KF9iID0gbWF0ZXJpYWwubmFtZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJyhubyBuYW1lKSd9IGJ1dCB0aGUgbWF0ZXJpYWwgaXMgbm90IHN1cHBvcnRlZC5gKTtcbiAgICAgICAgICAgIHRoaXMuX3Byb3BlcnRpZXMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3Byb3BlcnRpZXMgPSBbXTtcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZXMuZm9yRWFjaCgocHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHR1cmUgPSAoX2EgPSBtYXRlcmlhbFtwcm9wZXJ0eU5hbWVdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICBpZiAoIXRleHR1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1hdGVyaWFsW3Byb3BlcnR5TmFtZV0gPSB0ZXh0dXJlOyAvLyBiZWNhdXNlIHRoZSB0ZXh0dXJlIGlzIGNsb25lZFxuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxPZmZzZXQgPSB0ZXh0dXJlLm9mZnNldC5jbG9uZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxTY2FsZSA9IHRleHR1cmUucmVwZWF0LmNsb25lKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsdGFPZmZzZXQgPSBvZmZzZXQuY2xvbmUoKS5zdWIoaW5pdGlhbE9mZnNldCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsdGFTY2FsZSA9IHNjYWxlLmNsb25lKCkuc3ViKGluaXRpYWxTY2FsZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvcGVydGllcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICBkZWx0YU9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFNjYWxlLFxuICAgICAgICAgICAgICAgICAgICBkZWx0YVNjYWxlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXBwbHlXZWlnaHQod2VpZ2h0KSB7XG4gICAgICAgIHRoaXMuX3Byb3BlcnRpZXMuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMubWF0ZXJpYWxbcHJvcGVydHkubmFtZV07XG4gICAgICAgICAgICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IC8vIFRPRE86IHdlIHNob3VsZCBraWNrIHRoaXMgYXQgYGFkZE1hdGVyaWFsVmFsdWVgXG4gICAgICAgICAgICB0YXJnZXQub2Zmc2V0LmFkZChfdjIuY29weShwcm9wZXJ0eS5kZWx0YU9mZnNldCkubXVsdGlwbHlTY2FsYXIod2VpZ2h0KSk7XG4gICAgICAgICAgICB0YXJnZXQucmVwZWF0LmFkZChfdjIuY29weShwcm9wZXJ0eS5kZWx0YVNjYWxlKS5tdWx0aXBseVNjYWxhcih3ZWlnaHQpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNsZWFyQXBwbGllZFdlaWdodCgpIHtcbiAgICAgICAgdGhpcy5fcHJvcGVydGllcy5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5tYXRlcmlhbFtwcm9wZXJ0eS5uYW1lXTtcbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gLy8gVE9ETzogd2Ugc2hvdWxkIGtpY2sgdGhpcyBhdCBgYWRkTWF0ZXJpYWxWYWx1ZWBcbiAgICAgICAgICAgIHRhcmdldC5vZmZzZXQuY29weShwcm9wZXJ0eS5pbml0aWFsT2Zmc2V0KTtcbiAgICAgICAgICAgIHRhcmdldC5yZXBlYXQuY29weShwcm9wZXJ0eS5pbml0aWFsU2NhbGUpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5WUk1FeHByZXNzaW9uVGV4dHVyZVRyYW5zZm9ybUJpbmQuX3Byb3BlcnR5TmFtZXNNYXAgPSB7XG4gICAgaXNNZXNoU3RhbmRhcmRNYXRlcmlhbDogW1xuICAgICAgICAnbWFwJyxcbiAgICAgICAgJ2VtaXNzaXZlTWFwJyxcbiAgICAgICAgJ2J1bXBNYXAnLFxuICAgICAgICAnbm9ybWFsTWFwJyxcbiAgICAgICAgJ2Rpc3BsYWNlbWVudE1hcCcsXG4gICAgICAgICdyb3VnaG5lc3NNYXAnLFxuICAgICAgICAnbWV0YWxuZXNzTWFwJyxcbiAgICAgICAgJ2FscGhhTWFwJyxcbiAgICBdLFxuICAgIGlzTWVzaEJhc2ljTWF0ZXJpYWw6IFsnbWFwJywgJ3NwZWN1bGFyTWFwJywgJ2FscGhhTWFwJ10sXG4gICAgaXNNVG9vbk1hdGVyaWFsOiBbXG4gICAgICAgICdtYXAnLFxuICAgICAgICAnbm9ybWFsTWFwJyxcbiAgICAgICAgJ2VtaXNzaXZlTWFwJyxcbiAgICAgICAgJ3NoYWRlTXVsdGlwbHlUZXh0dXJlJyxcbiAgICAgICAgJ3JpbU11bHRpcGx5VGV4dHVyZScsXG4gICAgICAgICdvdXRsaW5lV2lkdGhNdWx0aXBseVRleHR1cmUnLFxuICAgICAgICAndXZBbmltYXRpb25NYXNrVGV4dHVyZScsXG4gICAgXSxcbn07XG5cbi8qKlxuICogUG9zc2libGUgc3BlYyB2ZXJzaW9ucyBpdCByZWNvZ25pemVzLlxuICovXG5jb25zdCBQT1NTSUJMRV9TUEVDX1ZFUlNJT05TJDQgPSBuZXcgU2V0KFsnMS4wJywgJzEuMC1iZXRhJ10pO1xuLyoqXG4gKiBBIHBsdWdpbiBvZiBHTFRGTG9hZGVyIHRoYXQgaW1wb3J0cyBhIHtAbGluayBWUk1FeHByZXNzaW9uTWFuYWdlcn0gZnJvbSBhIFZSTSBleHRlbnNpb24gb2YgYSBHTFRGLlxuICovXG5jbGFzcyBWUk1FeHByZXNzaW9uTG9hZGVyUGx1Z2luIHtcbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIHVzZSB0aGUgZXh0ZW5zaW9uIG5hbWUgaW5zdGVhZCBidXQgd2UgaGF2ZSBtdWx0aXBsZSBwbHVnaW5zIGZvciBhbiBleHRlbnNpb24uLi5cbiAgICAgICAgcmV0dXJuICdWUk1FeHByZXNzaW9uTG9hZGVyUGx1Z2luJztcbiAgICB9XG4gICAgY29uc3RydWN0b3IocGFyc2VyKSB7XG4gICAgICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICAgIH1cbiAgICBhZnRlclJvb3QoZ2x0Zikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgZ2x0Zi51c2VyRGF0YS52cm1FeHByZXNzaW9uTWFuYWdlciA9IHlpZWxkIHRoaXMuX2ltcG9ydChnbHRmKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEltcG9ydCBhIHtAbGluayBWUk1FeHByZXNzaW9uTWFuYWdlcn0gZnJvbSBhIFZSTS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBnbHRmIEEgcGFyc2VkIHJlc3VsdCBvZiBHTFRGIHRha2VuIGZyb20gR0xURkxvYWRlclxuICAgICAqL1xuICAgIF9pbXBvcnQoZ2x0Zikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgdjFSZXN1bHQgPSB5aWVsZCB0aGlzLl92MUltcG9ydChnbHRmKTtcbiAgICAgICAgICAgIGlmICh2MVJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2MVJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHYwUmVzdWx0ID0geWllbGQgdGhpcy5fdjBJbXBvcnQoZ2x0Zik7XG4gICAgICAgICAgICBpZiAodjBSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdjBSZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF92MUltcG9ydChnbHRmKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBqc29uID0gdGhpcy5wYXJzZXIuanNvbjtcbiAgICAgICAgICAgIC8vIGVhcmx5IGFib3J0IGlmIGl0IGRvZXNuJ3QgdXNlIHZybVxuICAgICAgICAgICAgY29uc3QgaXNWUk1Vc2VkID0gKChfYSA9IGpzb24uZXh0ZW5zaW9uc1VzZWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pbmRleE9mKCdWUk1DX3ZybScpKSAhPT0gLTE7XG4gICAgICAgICAgICBpZiAoIWlzVlJNVXNlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gKF9iID0ganNvbi5leHRlbnNpb25zKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2JbJ1ZSTUNfdnJtJ107XG4gICAgICAgICAgICBpZiAoIWV4dGVuc2lvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc3BlY1ZlcnNpb24gPSBleHRlbnNpb24uc3BlY1ZlcnNpb247XG4gICAgICAgICAgICBpZiAoIVBPU1NJQkxFX1NQRUNfVkVSU0lPTlMkNC5oYXMoc3BlY1ZlcnNpb24pKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBWUk1FeHByZXNzaW9uTG9hZGVyUGx1Z2luOiBVbmtub3duIFZSTUNfdnJtIHNwZWNWZXJzaW9uIFwiJHtzcGVjVmVyc2lvbn1cImApO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc2NoZW1hRXhwcmVzc2lvbnMgPSBleHRlbnNpb24uZXhwcmVzc2lvbnM7XG4gICAgICAgICAgICBpZiAoIXNjaGVtYUV4cHJlc3Npb25zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBsaXN0IGV4cHJlc3Npb25zXG4gICAgICAgICAgICBjb25zdCBwcmVzZXROYW1lU2V0ID0gbmV3IFNldChPYmplY3QudmFsdWVzKFZSTUV4cHJlc3Npb25QcmVzZXROYW1lKSk7XG4gICAgICAgICAgICBjb25zdCBuYW1lU2NoZW1hRXhwcmVzc2lvbk1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIGlmIChzY2hlbWFFeHByZXNzaW9ucy5wcmVzZXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHNjaGVtYUV4cHJlc3Npb25zLnByZXNldCkuZm9yRWFjaCgoW25hbWUsIHNjaGVtYUV4cHJlc3Npb25dKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzY2hlbWFFeHByZXNzaW9uID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfSAvLyB0eXBlc2NyaXB0XG4gICAgICAgICAgICAgICAgICAgIGlmICghcHJlc2V0TmFtZVNldC5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVlJNRXhwcmVzc2lvbkxvYWRlclBsdWdpbjogVW5rbm93biBwcmVzZXQgbmFtZSBcIiR7bmFtZX1cIiBkZXRlY3RlZC4gSWdub3JpbmcgdGhlIGV4cHJlc3Npb25gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuYW1lU2NoZW1hRXhwcmVzc2lvbk1hcC5zZXQobmFtZSwgc2NoZW1hRXhwcmVzc2lvbik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2NoZW1hRXhwcmVzc2lvbnMuY3VzdG9tICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhzY2hlbWFFeHByZXNzaW9ucy5jdXN0b20pLmZvckVhY2goKFtuYW1lLCBzY2hlbWFFeHByZXNzaW9uXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJlc2V0TmFtZVNldC5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVlJNRXhwcmVzc2lvbkxvYWRlclBsdWdpbjogQ3VzdG9tIGV4cHJlc3Npb24gY2Fubm90IGhhdmUgcHJlc2V0IG5hbWUgXCIke25hbWV9XCIuIElnbm9yaW5nIHRoZSBleHByZXNzaW9uYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbmFtZVNjaGVtYUV4cHJlc3Npb25NYXAuc2V0KG5hbWUsIHNjaGVtYUV4cHJlc3Npb24pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcHJlcGFyZSBtYW5hZ2VyXG4gICAgICAgICAgICBjb25zdCBtYW5hZ2VyID0gbmV3IFZSTUV4cHJlc3Npb25NYW5hZ2VyKCk7XG4gICAgICAgICAgICAvLyBsb2FkIGV4cHJlc3Npb25zXG4gICAgICAgICAgICB5aWVsZCBQcm9taXNlLmFsbChBcnJheS5mcm9tKG5hbWVTY2hlbWFFeHByZXNzaW9uTWFwLmVudHJpZXMoKSkubWFwKChbbmFtZSwgc2NoZW1hRXhwcmVzc2lvbl0pID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2MsIF9kLCBfZSwgX2YsIF9nLCBfaCwgX2o7XG4gICAgICAgICAgICAgICAgY29uc3QgZXhwcmVzc2lvbiA9IG5ldyBWUk1FeHByZXNzaW9uKG5hbWUpO1xuICAgICAgICAgICAgICAgIGdsdGYuc2NlbmUuYWRkKGV4cHJlc3Npb24pO1xuICAgICAgICAgICAgICAgIGV4cHJlc3Npb24uaXNCaW5hcnkgPSAoX2MgPSBzY2hlbWFFeHByZXNzaW9uLmlzQmluYXJ5KSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uLm92ZXJyaWRlQmxpbmsgPSAoX2QgPSBzY2hlbWFFeHByZXNzaW9uLm92ZXJyaWRlQmxpbmspICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6ICdub25lJztcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uLm92ZXJyaWRlTG9va0F0ID0gKF9lID0gc2NoZW1hRXhwcmVzc2lvbi5vdmVycmlkZUxvb2tBdCkgIT09IG51bGwgJiYgX2UgIT09IHZvaWQgMCA/IF9lIDogJ25vbmUnO1xuICAgICAgICAgICAgICAgIGV4cHJlc3Npb24ub3ZlcnJpZGVNb3V0aCA9IChfZiA9IHNjaGVtYUV4cHJlc3Npb24ub3ZlcnJpZGVNb3V0aCkgIT09IG51bGwgJiYgX2YgIT09IHZvaWQgMCA/IF9mIDogJ25vbmUnO1xuICAgICAgICAgICAgICAgIChfZyA9IHNjaGVtYUV4cHJlc3Npb24ubW9ycGhUYXJnZXRCaW5kcykgPT09IG51bGwgfHwgX2cgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9nLmZvckVhY2goKGJpbmQpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9rO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmluZC5ub2RlID09PSB1bmRlZmluZWQgfHwgYmluZC5pbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpbWl0aXZlcyA9ICh5aWVsZCBnbHRmRXh0cmFjdFByaW1pdGl2ZXNGcm9tTm9kZShnbHRmLCBiaW5kLm5vZGUpKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9ycGhUYXJnZXRJbmRleCA9IGJpbmQuaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBtZXNoIGhhcyB0aGUgdGFyZ2V0IG1vcnBoIHRhcmdldFxuICAgICAgICAgICAgICAgICAgICBpZiAoIXByaW1pdGl2ZXMuZXZlcnkoKHByaW1pdGl2ZSkgPT4gQXJyYXkuaXNBcnJheShwcmltaXRpdmUubW9ycGhUYXJnZXRJbmZsdWVuY2VzKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhUYXJnZXRJbmRleCA8IHByaW1pdGl2ZS5tb3JwaFRhcmdldEluZmx1ZW5jZXMubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBWUk1FeHByZXNzaW9uTG9hZGVyUGx1Z2luOiAke3NjaGVtYUV4cHJlc3Npb24ubmFtZX0gYXR0ZW1wdHMgdG8gaW5kZXggbW9ycGggIyR7bW9ycGhUYXJnZXRJbmRleH0gYnV0IG5vdCBmb3VuZC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uLmFkZEJpbmQobmV3IFZSTUV4cHJlc3Npb25Nb3JwaFRhcmdldEJpbmQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWl0aXZlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBtb3JwaFRhcmdldEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgd2VpZ2h0OiAoX2sgPSBiaW5kLndlaWdodCkgIT09IG51bGwgJiYgX2sgIT09IHZvaWQgMCA/IF9rIDogMS4wLFxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIGlmIChzY2hlbWFFeHByZXNzaW9uLm1hdGVyaWFsQ29sb3JCaW5kcyB8fCBzY2hlbWFFeHByZXNzaW9uLnRleHR1cmVUcmFuc2Zvcm1CaW5kcykge1xuICAgICAgICAgICAgICAgICAgICAvLyBsaXN0IHVwIGV2ZXJ5IG1hdGVyaWFsIGluIGBnbHRmLnNjZW5lYFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnbHRmTWF0ZXJpYWxzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGdsdGYuc2NlbmUudHJhdmVyc2UoKG9iamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBvYmplY3QubWF0ZXJpYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0ZXJpYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbHRmTWF0ZXJpYWxzLnB1c2gobWF0ZXJpYWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgKF9oID0gc2NoZW1hRXhwcmVzc2lvbi5tYXRlcmlhbENvbG9yQmluZHMpID09PSBudWxsIHx8IF9oID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfaC5mb3JFYWNoKChiaW5kKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbHMgPSBnbHRmTWF0ZXJpYWxzLmZpbHRlcigobWF0ZXJpYWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbEluZGV4ID0gZ2x0ZkdldEFzc29jaWF0ZWRNYXRlcmlhbEluZGV4KHRoaXMucGFyc2VyLCBtYXRlcmlhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJpbmQubWF0ZXJpYWwgPT09IG1hdGVyaWFsSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFscy5mb3JFYWNoKChtYXRlcmlhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb24uYWRkQmluZChuZXcgVlJNRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JCaW5kKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGJpbmQudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VmFsdWU6IG5ldyBUSFJFRS5Db2xvcigpLmZyb21BcnJheShiaW5kLnRhcmdldFZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QWxwaGE6IGJpbmQudGFyZ2V0VmFsdWVbM10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgKF9qID0gc2NoZW1hRXhwcmVzc2lvbi50ZXh0dXJlVHJhbnNmb3JtQmluZHMpID09PSBudWxsIHx8IF9qID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfai5mb3JFYWNoKChiaW5kKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbHMgPSBnbHRmTWF0ZXJpYWxzLmZpbHRlcigobWF0ZXJpYWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbEluZGV4ID0gZ2x0ZkdldEFzc29jaWF0ZWRNYXRlcmlhbEluZGV4KHRoaXMucGFyc2VyLCBtYXRlcmlhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJpbmQubWF0ZXJpYWwgPT09IG1hdGVyaWFsSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFscy5mb3JFYWNoKChtYXRlcmlhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbi5hZGRCaW5kKG5ldyBWUk1FeHByZXNzaW9uVGV4dHVyZVRyYW5zZm9ybUJpbmQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiBuZXcgVEhSRUUuVmVjdG9yMigpLmZyb21BcnJheSgoX2EgPSBiaW5kLm9mZnNldCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogWzAuMCwgMC4wXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiBuZXcgVEhSRUUuVmVjdG9yMigpLmZyb21BcnJheSgoX2IgPSBiaW5kLnNjYWxlKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBbMS4wLCAxLjBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtYW5hZ2VyLnJlZ2lzdGVyRXhwcmVzc2lvbihleHByZXNzaW9uKTtcbiAgICAgICAgICAgIH0pKSk7XG4gICAgICAgICAgICByZXR1cm4gbWFuYWdlcjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF92MEltcG9ydChnbHRmKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSB0aGlzLnBhcnNlci5qc29uO1xuICAgICAgICAgICAgLy8gZWFybHkgYWJvcnQgaWYgaXQgZG9lc24ndCB1c2UgdnJtXG4gICAgICAgICAgICBjb25zdCB2cm1FeHQgPSAoX2EgPSBqc29uLmV4dGVuc2lvbnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5WUk07XG4gICAgICAgICAgICBpZiAoIXZybUV4dCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc2NoZW1hQmxlbmRTaGFwZSA9IHZybUV4dC5ibGVuZFNoYXBlTWFzdGVyO1xuICAgICAgICAgICAgaWYgKCFzY2hlbWFCbGVuZFNoYXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBtYW5hZ2VyID0gbmV3IFZSTUV4cHJlc3Npb25NYW5hZ2VyKCk7XG4gICAgICAgICAgICBjb25zdCBzY2hlbWFCbGVuZFNoYXBlR3JvdXBzID0gc2NoZW1hQmxlbmRTaGFwZS5ibGVuZFNoYXBlR3JvdXBzO1xuICAgICAgICAgICAgaWYgKCFzY2hlbWFCbGVuZFNoYXBlR3JvdXBzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hbmFnZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBibGVuZFNoYXBlTmFtZVNldCA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIHlpZWxkIFByb21pc2UuYWxsKHNjaGVtYUJsZW5kU2hhcGVHcm91cHMubWFwKChzY2hlbWFHcm91cCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIHZhciBfYjtcbiAgICAgICAgICAgICAgICBjb25zdCB2MFByZXNldE5hbWUgPSBzY2hlbWFHcm91cC5wcmVzZXROYW1lO1xuICAgICAgICAgICAgICAgIGNvbnN0IHYxUHJlc2V0TmFtZSA9ICh2MFByZXNldE5hbWUgIT0gbnVsbCAmJiBWUk1FeHByZXNzaW9uTG9hZGVyUGx1Z2luLnYwdjFQcmVzZXROYW1lTWFwW3YwUHJlc2V0TmFtZV0pIHx8IG51bGw7XG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHYxUHJlc2V0TmFtZSAhPT0gbnVsbCAmJiB2MVByZXNldE5hbWUgIT09IHZvaWQgMCA/IHYxUHJlc2V0TmFtZSA6IHNjaGVtYUdyb3VwLm5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1ZSTUV4cHJlc3Npb25Mb2FkZXJQbHVnaW46IE9uZSBvZiBjdXN0b20gZXhwcmVzc2lvbnMgaGFzIG5vIG5hbWUuIElnbm9yaW5nIHRoZSBleHByZXNzaW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZHVwbGljYXRpb24gY2hlY2tcbiAgICAgICAgICAgICAgICBpZiAoYmxlbmRTaGFwZU5hbWVTZXQuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVlJNRXhwcmVzc2lvbkxvYWRlclBsdWdpbjogQW4gZXhwcmVzc2lvbiBwcmVzZXQgJHt2MFByZXNldE5hbWV9IGhhcyBkdXBsaWNhdGVkIGVudHJpZXMuIElnbm9yaW5nIHRoZSBleHByZXNzaW9uYCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYmxlbmRTaGFwZU5hbWVTZXQuYWRkKG5hbWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb24gPSBuZXcgVlJNRXhwcmVzc2lvbihuYW1lKTtcbiAgICAgICAgICAgICAgICBnbHRmLnNjZW5lLmFkZChleHByZXNzaW9uKTtcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uLmlzQmluYXJ5ID0gKF9iID0gc2NoZW1hR3JvdXAuaXNCaW5hcnkpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIHYwIGRvZXNuJ3QgaGF2ZSBpZ25vcmUgcHJvcGVydGllc1xuICAgICAgICAgICAgICAgIC8vIEJpbmQgbW9ycGhUYXJnZXRcbiAgICAgICAgICAgICAgICBpZiAoc2NoZW1hR3JvdXAuYmluZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NoZW1hR3JvdXAuYmluZHMuZm9yRWFjaCgoYmluZCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9jO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJpbmQubWVzaCA9PT0gdW5kZWZpbmVkIHx8IGJpbmQuaW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVzVXNpbmdNZXNoID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAoX2MgPSBqc29uLm5vZGVzKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuZm9yRWFjaCgobm9kZSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLm1lc2ggPT09IGJpbmQubWVzaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2Rlc1VzaW5nTWVzaC5wdXNoKGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9ycGhUYXJnZXRJbmRleCA9IGJpbmQuaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCBQcm9taXNlLmFsbChub2Rlc1VzaW5nTWVzaC5tYXAoKG5vZGVJbmRleCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmltaXRpdmVzID0gKHlpZWxkIGdsdGZFeHRyYWN0UHJpbWl0aXZlc0Zyb21Ob2RlKGdsdGYsIG5vZGVJbmRleCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBtZXNoIGhhcyB0aGUgdGFyZ2V0IG1vcnBoIHRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcHJpbWl0aXZlcy5ldmVyeSgocHJpbWl0aXZlKSA9PiBBcnJheS5pc0FycmF5KHByaW1pdGl2ZS5tb3JwaFRhcmdldEluZmx1ZW5jZXMpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoVGFyZ2V0SW5kZXggPCBwcmltaXRpdmUubW9ycGhUYXJnZXRJbmZsdWVuY2VzLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBWUk1FeHByZXNzaW9uTG9hZGVyUGx1Z2luOiAke3NjaGVtYUdyb3VwLm5hbWV9IGF0dGVtcHRzIHRvIGluZGV4ICR7bW9ycGhUYXJnZXRJbmRleH10aCBtb3JwaCBidXQgbm90IGZvdW5kLmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb24uYWRkQmluZChuZXcgVlJNRXhwcmVzc2lvbk1vcnBoVGFyZ2V0QmluZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1pdGl2ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBtb3JwaFRhcmdldEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWlnaHQ6IDAuMDEgKiAoKF9kID0gYmluZC53ZWlnaHQpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IDEwMCksIC8vIG5hcnJvd2luZyB0aGUgcmFuZ2UgZnJvbSBbIDAuMCAtIDEwMC4wIF0gdG8gWyAwLjAgLSAxLjAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQmluZCBNYXRlcmlhbENvbG9yIGFuZCBUZXh0dXJlVHJhbnNmb3JtXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWxWYWx1ZXMgPSBzY2hlbWFHcm91cC5tYXRlcmlhbFZhbHVlcztcbiAgICAgICAgICAgICAgICBpZiAobWF0ZXJpYWxWYWx1ZXMgJiYgbWF0ZXJpYWxWYWx1ZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsVmFsdWVzLmZvckVhY2goKG1hdGVyaWFsVmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRlcmlhbFZhbHVlLm1hdGVyaWFsTmFtZSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWxWYWx1ZS5wcm9wZXJ0eU5hbWUgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsVmFsdWUudGFyZ2V0VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICog44Ki44OQ44K/44O844Gu44Kq44OW44K444Kn44Kv44OI44Gr6Kit5a6a44GV44KM44Gm44GE44KL44Oe44OG44Oq44Ki44Or44Gu5YaF44GL44KJXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBtYXRlcmlhbFZhbHVl44Gn5oyH5a6a44GV44KM44Gm44GE44KL44Oe44OG44Oq44Ki44Or44KS6ZuG44KB44KL44CCXG4gICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICog54m55a6a44Gr44Gv5ZCN5YmN44KS5L2/55So44GZ44KL44CCXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiDjgqLjgqbjg4jjg6njgqTjg7Pmj4/nlLvnlKjjga7jg57jg4bjg6rjgqLjg6vjgoLlkIzmmYLjgavpm4bjgoHjgovjgIJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWxzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBnbHRmLnNjZW5lLnRyYXZlcnNlKChvYmplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqZWN0Lm1hdGVyaWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gb2JqZWN0Lm1hdGVyaWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtYXRlcmlhbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFscy5wdXNoKC4uLm1hdGVyaWFsLmZpbHRlcigobXRsKSA9PiAobXRsLm5hbWUgPT09IG1hdGVyaWFsVmFsdWUubWF0ZXJpYWxOYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXRsLm5hbWUgPT09IG1hdGVyaWFsVmFsdWUubWF0ZXJpYWxOYW1lICsgJyAoT3V0bGluZSknKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFscy5pbmRleE9mKG10bCkgPT09IC0xKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobWF0ZXJpYWwubmFtZSA9PT0gbWF0ZXJpYWxWYWx1ZS5tYXRlcmlhbE5hbWUgJiYgbWF0ZXJpYWxzLmluZGV4T2YobWF0ZXJpYWwpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWxzLnB1c2gobWF0ZXJpYWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbFByb3BlcnR5TmFtZSA9IG1hdGVyaWFsVmFsdWUucHJvcGVydHlOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWxzLmZvckVhY2goKG1hdGVyaWFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGV4dHVyZVRyYW5zZm9ybUJpbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0ZXJpYWxQcm9wZXJ0eU5hbWUgPT09ICdfTWFpblRleF9TVCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSBuZXcgVEhSRUUuVmVjdG9yMihtYXRlcmlhbFZhbHVlLnRhcmdldFZhbHVlWzBdLCBtYXRlcmlhbFZhbHVlLnRhcmdldFZhbHVlWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjIobWF0ZXJpYWxWYWx1ZS50YXJnZXRWYWx1ZVsyXSwgbWF0ZXJpYWxWYWx1ZS50YXJnZXRWYWx1ZVszXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldC55ID0gMS4wIC0gb2Zmc2V0LnkgLSBzY2FsZS55O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uLmFkZEJpbmQobmV3IFZSTUV4cHJlc3Npb25UZXh0dXJlVHJhbnNmb3JtQmluZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWF0ZXJpYWxDb2xvckJpbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbENvbG9yVHlwZSA9IHYwRXhwcmVzc2lvbk1hdGVyaWFsQ29sb3JNYXBbbWF0ZXJpYWxQcm9wZXJ0eU5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRlcmlhbENvbG9yVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uLmFkZEJpbmQobmV3IFZSTUV4cHJlc3Npb25NYXRlcmlhbENvbG9yQmluZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IG1hdGVyaWFsQ29sb3JUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VmFsdWU6IG5ldyBUSFJFRS5Db2xvcigpLmZyb21BcnJheShtYXRlcmlhbFZhbHVlLnRhcmdldFZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEFscGhhOiBtYXRlcmlhbFZhbHVlLnRhcmdldFZhbHVlWzNdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKG1hdGVyaWFsUHJvcGVydHlOYW1lICsgJyBpcyBub3Qgc3VwcG9ydGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1hbmFnZXIucmVnaXN0ZXJFeHByZXNzaW9uKGV4cHJlc3Npb24pO1xuICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgICAgIHJldHVybiBtYW5hZ2VyO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5WUk1FeHByZXNzaW9uTG9hZGVyUGx1Z2luLnYwdjFQcmVzZXROYW1lTWFwID0ge1xuICAgIGE6ICdhYScsXG4gICAgZTogJ2VlJyxcbiAgICBpOiAnaWgnLFxuICAgIG86ICdvaCcsXG4gICAgdTogJ291JyxcbiAgICBibGluazogJ2JsaW5rJyxcbiAgICBqb3k6ICdoYXBweScsXG4gICAgYW5ncnk6ICdhbmdyeScsXG4gICAgc29ycm93OiAnc2FkJyxcbiAgICBmdW46ICdyZWxheGVkJyxcbiAgICBsb29rdXA6ICdsb29rVXAnLFxuICAgIGxvb2tkb3duOiAnbG9va0Rvd24nLFxuICAgIGxvb2tsZWZ0OiAnbG9va0xlZnQnLFxuICAgIGxvb2tyaWdodDogJ2xvb2tSaWdodCcsXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxuICAgIGJsaW5rX2w6ICdibGlua0xlZnQnLFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cbiAgICBibGlua19yOiAnYmxpbmtSaWdodCcsXG4gICAgbmV1dHJhbDogJ25ldXRyYWwnLFxufTtcblxuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG5jb25zdCBWUk1FeHByZXNzaW9uT3ZlcnJpZGVUeXBlID0ge1xuICAgIE5vbmU6ICdub25lJyxcbiAgICBCbG9jazogJ2Jsb2NrJyxcbiAgICBCbGVuZDogJ2JsZW5kJyxcbn07XG5cbmNsYXNzIFZSTUZpcnN0UGVyc29uIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgVlJNRmlyc3RQZXJzb24gb2JqZWN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIGh1bWFub2lkIEEge0BsaW5rIFZSTUh1bWFub2lkfVxuICAgICAqIEBwYXJhbSBtZXNoQW5ub3RhdGlvbnMgQSByZW5kZXJlciBzZXR0aW5ncy4gU2VlIHRoZSBkZXNjcmlwdGlvbiBvZiBbW1JlbmRlcmVyRmlyc3RQZXJzb25GbGFnc11dIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihodW1hbm9pZCwgbWVzaEFubm90YXRpb25zKSB7XG4gICAgICAgIHRoaXMuX2ZpcnN0UGVyc29uT25seUxheWVyID0gVlJNRmlyc3RQZXJzb24uREVGQVVMVF9GSVJTVFBFUlNPTl9PTkxZX0xBWUVSO1xuICAgICAgICB0aGlzLl90aGlyZFBlcnNvbk9ubHlMYXllciA9IFZSTUZpcnN0UGVyc29uLkRFRkFVTFRfVEhJUkRQRVJTT05fT05MWV9MQVlFUjtcbiAgICAgICAgdGhpcy5faW5pdGlhbGl6ZWRMYXllcnMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5odW1hbm9pZCA9IGh1bWFub2lkO1xuICAgICAgICB0aGlzLm1lc2hBbm5vdGF0aW9ucyA9IG1lc2hBbm5vdGF0aW9ucztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29weSB0aGUgZ2l2ZW4ge0BsaW5rIFZSTUZpcnN0UGVyc29ufSBpbnRvIHRoaXMgb25lLlxuICAgICAqIHtAbGluayBodW1hbm9pZH0gbXVzdCBiZSBzYW1lIGFzIHRoZSBzb3VyY2Ugb25lLlxuICAgICAqIEBwYXJhbSBzb3VyY2UgVGhlIHtAbGluayBWUk1GaXJzdFBlcnNvbn0geW91IHdhbnQgdG8gY29weVxuICAgICAqIEByZXR1cm5zIHRoaXNcbiAgICAgKi9cbiAgICBjb3B5KHNvdXJjZSkge1xuICAgICAgICBpZiAodGhpcy5odW1hbm9pZCAhPT0gc291cmNlLmh1bWFub2lkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZSTUZpcnN0UGVyc29uOiBodW1hbm9pZCBtdXN0IGJlIHNhbWUgaW4gb3JkZXIgdG8gY29weScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWVzaEFubm90YXRpb25zID0gc291cmNlLm1lc2hBbm5vdGF0aW9ucy5tYXAoKGFubm90YXRpb24pID0+ICh7XG4gICAgICAgICAgICBtZXNoZXM6IGFubm90YXRpb24ubWVzaGVzLmNvbmNhdCgpLFxuICAgICAgICAgICAgdHlwZTogYW5ub3RhdGlvbi50eXBlLFxuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgY2xvbmUgb2YgdGhpcyB7QGxpbmsgVlJNRmlyc3RQZXJzb259LlxuICAgICAqIEByZXR1cm5zIENvcGllZCB7QGxpbmsgVlJNRmlyc3RQZXJzb259XG4gICAgICovXG4gICAgY2xvbmUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVlJNRmlyc3RQZXJzb24odGhpcy5odW1hbm9pZCwgdGhpcy5tZXNoQW5ub3RhdGlvbnMpLmNvcHkodGhpcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEEgY2FtZXJhIGxheWVyIHJlcHJlc2VudHMgYEZpcnN0UGVyc29uT25seWAgbGF5ZXIuXG4gICAgICogTm90ZSB0aGF0ICoqeW91IG11c3QgY2FsbCB7QGxpbmsgc2V0dXB9IGZpcnN0IGJlZm9yZSB5b3UgdXNlIHRoZSBsYXllciBmZWF0dXJlKiogb3Ig