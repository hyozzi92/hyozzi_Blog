const Category = {
  Dev : {letter : '프로그램 개발', value : 'Dev'},
  Fashion : {letter: '패션아이템', value: 'Fashion'},
  Food : {letter : '맛집기행', value:'Food'},
  Health : {letter : '운동일지', value: 'Health'}
}
const Category_Detail = {
  Dev : {
   Javascript :{ letter: 'Javascript', value : 'Javascript' },
   Python : {letter: 'Python', value : 'Python'},
   Java : { letter: 'Java', value: 'Java' },
   Spring : { letter : 'Spring', value : 'Spring' },
   Vue : {letter : 'Vue', value : 'vue'},
  },
  Fashion : {
    Shoes : {letter : 'Shoes', value:'Shoes'},
    Clothes : {letter : 'Clothes', value:'Clothes'},
    Hat : {letter : 'Hat', value:'Hat'},
    Accessory : {letter : 'Accessory', value:'Accessory'},
  },
  Food : {
    Korean : {letter : '한식', value:'Korean'},
    Western : {letter : '양식', value:'Western'},
    Thai : {letter : '타이', value:'Thai'},
    Japanese : {letter : '일식', value:'Japanese'},
  },
  Health :{
    Vlog : {letter:'Vlog', value:'Vlog'}
  }
}
const ConstCode = function(){
  return {
    Category,
    Category_Detail
  }
}
export default ConstCode();