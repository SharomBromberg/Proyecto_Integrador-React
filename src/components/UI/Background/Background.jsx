import { VideoBackgroundStyled } from './BackgroundStyled'

const VideoBackground = () => (
	<VideoBackgroundStyled autoPlay loop muted>
		<source
			src="/src/assets/backgounds/7020040_Light_Sun_3840x2160.mp4"
			type="video/mp4"
		/>
		Your browser does not support the video tag.
	</VideoBackgroundStyled>
)

export default VideoBackground
