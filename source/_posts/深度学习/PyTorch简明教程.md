---
title: "Pytorch 简明教程"
date: 2025-4-24 8:00:00
---

# 一、Tensor



## 性质 | Features

- `tensor` 是一个特殊的数据结构，与 `array` 和 `matrix` 类似

- 常见用法：在 PyToch 中，用`tensor`来编码模型的`input` , `output` 和 `paramater`
- 区别：与 NumPy 中的 `ndarray` 相似，唯一不同的就是 `tensor` 可以跑在 GPUs 以及其他硬件加速器上面
- Bridge with NumPy：`tensor` 与 `ndarray` 可以用过共享内存的方式直接转换，而省去了 `copy` 这一操作
- 自微分优化： `tensor` 可以 `automatic differentiation`



## 创建 | Initialization

- 从数据：`torch.tensor(data)`
- 从NumPy ndarray：`torch.from_numpy(np_array)`
- 从其他Tensor：`torch.ones_like(tensor)`
- 随机数创建：`torch.rand()`
- 常数创建：`torch.ones()`，`torch.zeros()`



## 属性 | Attributes

- `shape`：描述 tensor 形状
- `dtype`：描述 tensor 数据类型
- `device`：描述 tensor 运行设备



## 操作 | Operations

1. 所有的`1200+`个操作，都支持在不同的设备上运行
2. 默认的 `tensor` 存储在CPU上，转存其他设备用 `tensor.to()` 方法 
3. 转存 `tensor` 费时费内存



- Standard numpy-like indexing and slicing
- Joining tensors
- Arithmetic operations
- In-place operations：add suffix `_` to method names of operations



## 桥接 | Bridge with NumPy

- Tensor to NumPy array：`tensor.numpy()`
- NumPy array to Tensor：`tensor.from_numpy()`



# 二、Datasets & DataLoaders

> 通常处理 data sample 的操作代码**十分繁琐**并且**难以维护**， 为了将 dataset code 从 training code 部分解耦出来，提升其可读性和模块化程度。
>
> PyTorch 提供了两个基本构件(primitives)：
>
> - `torch.utils.data.Dataset`
> - `torch.utils.data.DataLoader`





## 自定义 | Customized Datasets



官方示例：

```python
import os
import pandas as pd
from torchvison.io import read_image

class CustomImageDataset(Dataset):
    def __init__(self, annotations_file, img_dir, transform=None, target_transform=None):
        self.img_labels = pd.read_csv(annotations_file)
        self.img_dir = img_dir
        self.transform = transform
        self.target_transform = target_transform
        
    def __len__(self):
        return len(img_labels)
    
    def __getitem__(self, idx):
        img_path = os.path.join(self.img_dir, self.img_labels.iloc[idx, 0]) 
        img = read_image(img_path)
        label = self.img_labels.iloc[idx, 1]
        if self.transform：
        	img = self.transform(img)
        if self.target_transform:
            label = self.target_transform(label)
        return img, label
```

