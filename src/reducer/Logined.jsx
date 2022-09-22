// const LOGINED = 'LOGINED'
// const NOTLOGINED = 'NOTLOGINED'

// // 액션 생성 함수
// export const login = (info) => {
//   return { type: LOGINED, info }
// }

// export const logout = () => {
//   return { type: NOTLOGINED }
// }

// // 초기 설정
// const initState = {
//   logined: false,
//   info: {
//     email: null,
//     name: null,
//     id: null,
//   },
// }

// // 리듀서
// export default function loginReducer(state = initState, action) {
//   switch (action.type) {
//     case LOGINED:
//       return {
//         ...state,
//         logined: true,
//         info: {
//           ...action.info,
//         },
//       }
//     case NOTLOGINED:
//       return {
//         ...state,
//         logined: false,
//       }
//     default:
//       return {
//         ...state,
//       }
//   }
// }
