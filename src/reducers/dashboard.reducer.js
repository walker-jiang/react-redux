
const initialState = {
  lineData: [
    {name: '8:00', 发帖量: 40, 回复数: 240, amt: 240},
    {name: '9:00', 发帖量: 30, 回复数: 139, amt: 210},
    {name: '10:00', 发帖量: 20, 回复数: 600, amt: 229},
    {name: '11:00', 发帖量: 27, 回复数: 408, amt: 200},
    {name: '12:00', 发帖量: 18, 回复数: 700, amt: 218},
    {name: '13:00', 发帖量: 23, 回复数: 303, amt: 250},
    {name: '14:00', 发帖量: 34, 回复数: 431, amt: 210}
  ],
  barData: [
    {name: '8:00', uv: 400, pv: 240, amt: 2400},
    {name: '9:00', uv: 300, pv: 139, amt: 2210},
    {name: '10:00', uv: 200, pv: 980, amt: 2290},
    {name: '11:00', uv: 278, pv: 390, amt: 2000},
    {name: '12:00', uv: 189, pv: 480, amt: 2181},
    {name: '13:00', uv: 239, pv: 380, amt: 2500},
    {name: '14:00', uv: 349, pv: 430, amt: 2100}
  ]
};

export default (state = initialState, action) => {
  return state;
} 
