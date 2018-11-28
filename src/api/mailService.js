const apiEmailUrl = 'https://blooming-garden-36028.herokuapp.com/send-email'
const email = 'Faeton20006@yahoo.com'

export default class mailService {
  static sendEmail(subject, text) {
    return mailService.sendData(apiEmailUrl, {
      to: email,
      subject,
      text,
    })
  }

  static sendData(url, data) {
    const formData = new FormData()
    Object.entries(data).forEach(item => formData.append(item[0], item[1]))

    return fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => {
      if (res.ok) {
        return res.body
      }
      throw new Error('Network response was not ok.')
    })
      .catch((error) => {
      console.log(`There has been a problem with your fetch operation: ${error.message}`)
    })
  }
}
