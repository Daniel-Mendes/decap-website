---
title: Image
sidebar_custom_props:
  icon: /icons/file-image.svg
---

The image widget allows editors to upload an image or select an existing one from the media library. The path to the image file will be saved to the field as a string.

- **Name:** `image`
- **UI:** file picker button opens media gallery allowing image files (jpg, jpeg, webp, gif, png, bmp, tiff, svg) only; displays selected image thumbnail
- **Data type:** file path string
- **Options:**

  - `default`: accepts a file path string; defaults to null
  - `media_library`: settings to apply when a media library is opened by the
    current widget
  - `allow_multiple`: _(default: `true`)_ when set to `false`, multiple selection will be disabled even if the media library extension supports it
  - `config`: a configuration object passed directly to the media library; check the documentation of your media library extension for available `config` options
  - `media_folder` (Beta): file path where uploaded images will be saved specific to this control. Paths can be relative to a collection folder (e.g. `images` will add the image to a sub-folder in the collection folder) or absolute with reference to the base of the repo which needs to begin with `/` (e.g `/static/images` will save uploaded images to the `static` folder in a sub folder named `images`)
  - `public_folder` _(defaults to the value of `media_folder`, with an opening `/` if one is not already included.)_: specifies the folder path where the files uploaded by the media library will be accessed, relative to the base of the built site. The value of the field is generated by prepending this path to the filename of the selected file.
  - `choose_url`: _(default: `true`)_ when set to `false`, the "Insert from URL" button will be hidden

- **Example:**

```yaml
- label: "Featured Image"
  name: "thumbnail"
  widget: "image"
  choose_url: true
  default: "/uploads/chocolate-dogecoin.jpg"
  media_library:
    config:
      multiple: true
```

### Image Size Limit

You can set a limit to as what the maximum file size of a file is that users can upload directly into a image field.

**Example**

```yaml
media_library:
  config:
    max_file_size: 512000 # in bytes, only for default media library
```