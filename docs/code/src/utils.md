Here is the generated documentation in Markdown format:

---
title: utils.ts
description: 'A utility file for merging class values and using Tailwind CSS'
---

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

This file provides a utility function `cn` that merges class values using the `clsx` library and the `twMerge` function from Tailwind CSS. The function takes a variable number of arguments, each of which is a class value, and returns a merged class string.