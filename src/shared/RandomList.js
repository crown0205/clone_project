const randomList = (item_list) => {
  let random_list = [];

  if (item_list.length) {
    for (let i = 0; i < 8; i++) {
      let randomNum = Math.floor(Math.random() * item_list?.length);

      //   // 중복체크
      if (random_list.indexOf(randomNum) === -1) {
        //     //  리스트에서 중복되지 않은 리스트만 뽑아서 배열에 담음.
        random_list.push(item_list[randomNum]);
      } else {
        //     // 중복된 값이 나오면 i를 빼주어 다시 한번더 값을 만들어낸다.
        i--;
      }
    }
  }
  return random_list;
};

export { randomList };
