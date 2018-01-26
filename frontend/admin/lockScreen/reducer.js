const stateConst = {
  adminLocked: false
}

export default function reducer(state = stateConst, action) {

  switch (action.type) {

    case 'TOGGLE_ADMIN_LOCKED':
    {
      const locked = state.adminLocked
      return {
        ...state,
        adminLocked: !locked
      }

    } // case

  } // switch

  return state // default return

} // reducer
