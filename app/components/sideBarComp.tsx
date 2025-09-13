import React from 'react'

type sideBarProps = {
    imageUrl: string
}

const SideBarComp = ({imageUrl} :sideBarProps) => {
  return (
    <div >
        <div style={{fontFamily: 'Epilogue', fontWeight: 400, fontSize:16}}>Posted on</div>
        <div style={{fontFamily: 'Epilogue', fontWeight: 600, fontSize:16}}>Jul 1, 2023</div>
    </div>
  )
}

export default SideBarComp