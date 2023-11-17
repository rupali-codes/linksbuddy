import React from 'react'
import { SVGProps } from 'react'
const MessageIcon = ({ ...rest }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="my-auto"
    >
      <path
        d="M14.1667 15.3583H10.8334L7.12507 17.8249C6.57507 18.1916 5.83341 17.8 5.83341 17.1333V15.3583C3.33341 15.3583 1.66675 13.6916 1.66675 11.1916V6.19157C1.66675 3.69157 3.33341 2.0249 5.83341 2.0249H14.1667C16.6667 2.0249 18.3334 3.69157 18.3334 6.19157V11.1916C18.3334 13.6916 16.6667 15.3583 14.1667 15.3583Z"
        stroke="#A6ABBF"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 9.46655V9.29159C10 8.72492 10.35 8.4249 10.7 8.18324C11.0417 7.9499 11.3833 7.64991 11.3833 7.09991C11.3833 6.33325 10.7667 5.71655 10 5.71655C9.23334 5.71655 8.6167 6.33325 8.6167 7.09991"
        stroke="#A6ABBF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.99617 11.4584H10.0037"
        stroke="#A6ABBF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default MessageIcon
