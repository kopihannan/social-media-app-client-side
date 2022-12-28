
const imageUpload = async image => {

    const imageHostKey = "11812b76138a1ea361ef52e83eb3b0c2"

    if (image) {
      const formData = new FormData()
      formData.append('image', image)
      const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
  
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()
      return data
    }
  }
  
  export default imageUpload;