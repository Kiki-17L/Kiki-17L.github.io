---
title: "LeNet5"
author: Louis Liang
date: 2025-3-3 10:00:00
---



# Architecture

- Every convolutional layer includes three parts: **convolution, pooling and nonlinear activation functions**
- Using convolution to extract spatial features(Convolution was called **receptive fields** originally)
- Subsampling average pooling layer
- tanh activation function
- fully connected layers in the final layers for classification
- Sparse connection between layers to reduce the complexity of computation



the meaning of convolution: 

- Local receptive fields | 局部感知
- Shared weights | 共享权重
- Translation invariance | 平移不变性