export {
  getDevices,
  LocalStream,
  LocalDisplayStream,
  LocalStreamEventNames,
  StreamEventNames,
  type ServerMuteReason,
  LocalMicrophoneStreamEventNames,
  LocalCameraStreamEventNames,
  LocalMicrophoneStream,
  LocalCameraStream,
  createMicrophoneStream,
  createCameraStream,
  createDisplayStream,
} from './webrtc-core';

export {NoiseReductionEffect, VirtualBackgroundEffect} from '@webex/web-media-effects';
export type {
  NoiseReductionEffectOptions,
  VirtualBackgroundEffectOptions,
} from '@webex/web-media-effects';
