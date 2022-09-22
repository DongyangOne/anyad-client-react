import { useState } from 'react'
import { removeCookie, setCookie } from '../../config/Cookie'

export function useNull(arr) {
  for (const item of arr) {
    if (!item) return false
  }
  return true
}

export function useCheck(a, b) {
  if (a !== b) return false
  return true
}

export function useInput(init) {
  const [item, setItem] = useState(init)
  const onChange = (event) => {
    setItem(event.target.value)
  }
  return { item, onChange, setItem }
}

export function useLogin(info, token) {
  localStorage.setItem('info', JSON.stringify(info))
  setCookie('accessToken', token)
}

export function useLogout() {
  localStorage.removeItem('info')
  removeCookie('accessToken')
}
