
const permissionsModel = {
  general: {},
  products: {},
  clients: {},
  users: {},
  suppliers: {}
}

const stateConst = {
  permissions: [],
  permissionsActive: permissionsModel,
  permissionsActiveOld: permissionsModel,
  userFilter: ''
}

export default function reducer(state = stateConst, action) {

  switch (action.type) {

    case 'SET_USER_FILTER':
    {
      return {
        ...state,
        userFilter: action.payload
      }
    } // case

    case 'FETCH_PERMISSIONS_FULLFILLED':
    {
      return {
        ...state,
        permissions: action.payload
      }
    } // case

    case 'FETCH_PERMISSIONS_REJECTED':
    {
      return {
        ...state,
        permissions: []
      }
    } // case

    case 'SET_PERMISSIONS':
    {
      return {
        ...state,
        permissionsActive: action.payload
      }
    }

    case 'SET_PERMISSIONS_OLD':
    {
      return {
        ...state,
        permissionsActiveOld: action.payload
      }
    }

    case 'CLEAR_PERMISSIONS':
    {
      return {
        ...state,
        permissionsActive: permissionsModel,
        permissionsActiveOld: permissionsModel
      }
    }

  } // switch

  return state // default return

} // reducer
