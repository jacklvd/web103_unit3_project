const eventData = [
  {
    id: 1,
    location: 'echolounge',
    name: 'ECHO LOUNGE & MUSIC HALL',
    locationimage:
      'https://www.rios.com/wp-content/uploads/2022/08/The-Echo-Lounge-Music-Hall-RIOS-Hunter-Kerhart-exterior-Hero.jpg',
    address: '1323 N Stemmons Fwy, Dallas, TX 75207',
    event: 'Wage War - The Manic Tour',
    date: 'April 14, 2023',
    time: '6:00 PM',
    picture:
      'https://images.unsplash.com/photo-1694705446476-1fd06c06d54c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2495&q=80',
    price: '25.00',
  },
  {
    id: 2,
    location: 'echolounge',
    name: 'ECHO LOUNGE & MUSIC HALL',
    locationimage:
      'https://www.rios.com/wp-content/uploads/2022/08/The-Echo-Lounge-Music-Hall-RIOS-Hunter-Kerhart-exterior-Hero.jpg',
    address: '1323 N Stemmons Fwy, Dallas, TX 75207',
    event: 'Sprit Box - North American Tour',
    date: 'April 19, 2023',
    time: '6:15 PM',
    picture:
      'https://images.unsplash.com/photo-1694846119962-491ac7bcc568?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80',
    price: '30.00',
  },
  {
    id: 3,
    location: 'echolounge',
    name: 'ECHO LOUNGE & MUSIC HALL',
    locationimage:
      'https://www.rios.com/wp-content/uploads/2022/08/The-Echo-Lounge-Music-Hall-RIOS-Hunter-Kerhart-exterior-Hero.jpg',
    address: '1323 N Stemmons Fwy, Dallas, TX 75207',
    event: 'Atreyu',
    date: 'May 21, 2023',
    time: '7:00 PM',
    picture:
      'https://images.unsplash.com/photo-1592636120953-3d2b28ebfd69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80',
    price: '20.00',
  },
  {
    id: 4,
    location: 'echolounge',
    name: 'ECHO LOUNGE & MUSIC HALL',
    locationimage:
      'https://www.rios.com/wp-content/uploads/2022/08/The-Echo-Lounge-Music-Hall-RIOS-Hunter-Kerhart-exterior-Hero.jpg',
    address: '1323 N Stemmons Fwy, Dallas, TX 75207',
    event: 'Thrice',
    date: 'June 1, 2023',
    time: '7:00 PM',
    picture:
      'https://images.unsplash.com/photo-1591457975676-b9d847fc01ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2535&q=80',
    price: '25.00',
  },
  {
    id: 5,
    location: 'houseofblues',
    name: 'HOUSE OF BLUES',
    locationimage:
      'https://mavenprodcontent.blob.core.windows.net/media/houseofblues_hou/Special_Events/morePhotos/houston-special-events-9.jpg',
    address: '2200 N Lamar St, Dallas, TX 75202',
    event: 'Bad Flower: Asking For A Friend Tour',
    date: 'April 14, 2023',
    time: '6:30 PM',
    picture:
      'https://images.unsplash.com/photo-1694846119962-491ac7bcc568?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80',
    price: '25.00',
  },
  {
    id: 6,
    location: 'americanairlines',
    name: 'AMERICAN AIRLINES CENTER',
    locationimage:
      'https://www.americanairlinescenter.com/assets/img/aacenter.jpg',
    address: '2500 Victory Ave, Dallas, TX 75219',
    event: 'The Weeknd',
    date: 'April 19, 2023',
    time: '7:00 PM',
    picture:
      'https://images.unsplash.com/photo-1694846119962-491ac7bcc568?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80',
    price: '50.00',
  },
  {
    id: 7,
    location: 'americanairlines',
    name: 'AMERICAN AIRLINES CENTER',
    locationimage:
      'https://www.americanairlinescenter.com/assets/img/aacenter.jpg',
    address: '2500 Victory Ave, Dallas, TX 75219',
    event: 'Kane Brown',
    date: 'May 21, 2023',
    time: '7:00 PM',
    picture:
      'https://images.unsplash.com/photo-1694846119962-491ac7bcc568?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80',
    price: '55.00',
  },
  {
    id: 8,
    location: 'americanairlines',
    name: 'AMERICAN AIRLINES CENTER',
    locationimage:
      'https://www.americanairlinescenter.com/assets/img/aacenter.jpg',
    address: '2500 Victory Ave, Dallas, TX 75219',
    event: 'Harry Styles',
    date: 'June 1, 2023',
    time: '7:00 PM',
    picture:
      'https://images.unsplash.com/photo-1695378201929-c7e68a8102bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2524&q=80',
    price: '60.00',
  },
  {
    id: 9,
    location: 'pavilion',
    name: 'THE PAVILION AT TOYOTA MUSIC FACTORY',
    locationimage:
      'https://www.pinkjacket.com/wp-content/uploads/2021/11/1899318615_mainimagewebsite-worktmfv205.jpg',
    address: '300 W Las Colinas Blvd, Irving, TX 75039',
    event: 'The Black Crowes',
    date: 'April 14, 2023',
    time: '6:30 PM',
    picture:
      'https://images.unsplash.com/photo-1591457975676-b9d847fc01ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2535&q=80',
    price: '25.00',
  },
  {
    id: 10,
    location: 'pavilion',
    name: 'THE PAVILION AT TOYOTA MUSIC FACTORY',
    locationimage:
      'https://www.pinkjacket.com/wp-content/uploads/2021/11/1899318615_mainimagewebsite-worktmfv205.jpg',
    address: '300 W Las Colinas Blvd, Irving, TX 75039',
    event: 'Weezer',
    date: 'July 19, 2023',
    time: '7:10 PM',
    picture:
      'https://images.unsplash.com/photo-1694846119962-491ac7bcc568?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80',
    price: '30.00',
  },
  {
    id: 11,
    location: 'pavilion',
    name: 'THE PAVILION AT TOYOTA MUSIC FACTORY',
    locationimage:
      'https://www.pinkjacket.com/wp-content/uploads/2021/11/1899318615_mainimagewebsite-worktmfv205.jpg',
    address: '300 W Las Colinas Blvd, Irving, TX 75039',
    event: 'The Yellowcard',
    date: 'August 21, 2023',
    time: '7:00 PM',
    picture:
      'https://images.unsplash.com/photo-1694267510052-feac0d872085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80',
    price: '35.00',
  },
  {
    id: 12,
    location: 'pavilion',
    name: 'THE PAVILION AT TOYOTA MUSIC FACTORY',
    locationimage:
      'https://www.pinkjacket.com/wp-content/uploads/2021/11/1899318615_mainimagewebsite-worktmfv205.jpg',
    address: '300 W Las Colinas Blvd, Irving, TX 75039',
    event: 'The Offspring',
    date: 'September 1, 2023',
    time: '7:00 PM',
    picture:
      'https://images.unsplash.com/photo-1686579809662-829e8374d0a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2672&q=80',
    price: '40.00',
  },
]

export default eventData
