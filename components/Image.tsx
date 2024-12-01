"use client";
import React from "react";
import { IKImage, ImageKitProvider } from "imagekitio-next";

interface ImageProps {
  path: string;
  width?: number;
  height?: number;
  alt: string;
  transformation?: object[];
}

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const Image: React.FC<ImageProps> = ({
  path,
  width,
  height,
  alt,
  transformation,
}) => {
  const qualityTransformation = [{ quality: 100 }, ...(transformation || [])];

  return (
    <ImageKitProvider urlEndpoint={urlEndpoint}>
      <IKImage
        path={path}
        width={width}
        height={height}
        alt={alt}
        transformation={qualityTransformation}
      />
    </ImageKitProvider>
  );
};

export default Image;
