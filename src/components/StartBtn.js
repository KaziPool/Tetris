import React from 'react'
import {StyledBtn} from './styles/StyledStartBtn'

const StartBtn=({callback})=>(
    <StyledBtn onClick={callback}>
        start game
    </StyledBtn>
)

export default StartBtn