import type { ImageKey } from './images';
// Each chapter starts with its established cover photograph.
export const galleries: Record<string, ImageKey[]> = {
 londres: ['londres','richmond','galleryEmirates','galleryChelsea','galleryWembley','galleryBridge'],
 birmingham: ['birmingham','stAndrews','galleryLibrary','galleryGasstreet','galleryVictoria','galleryDigbeth'],
 manchester: ['oldTraffordJogo','manchester','oldTraffordFachada','oldTrafford','galleryMcrlibrary','galleryCastlefield'],
 'san-sebastian': ['sorginCampo','sanSebastian','sanSebastianRua','galleryPeine','galleryKursaal','galleryDonostia'],
 funchal: ['areeiro','funchal','saoLourenco','galleryMarket','galleryCamara','areeiroEstrada'],
 'ponta-delgada': ['fanal','portoMoniz','portoMonizOndas','galleryPonta','gallerySeixal','gallerySantana'],
};
