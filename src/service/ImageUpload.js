class ImageUpload {
  async upload(file) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ulss5bqp");
    const result = await fetch(
      "https://api.cloudinary.com/v1_1/dutykggfv/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    return await result.json();
  }
}

export default ImageUpload;
