import style from './key.module.scss'

type KeyProps = {
    playing: string | null,
    text: string,
    onClick: () => void,
}

const Key = (({ playing, text, onClick }: KeyProps) =>{
    return (
        <div className={`${style.text} ${style[playing == text ? "play" : ""]}`} onClick={() => onClick()}>
            {text}
        </div>
    )
})

export default Key