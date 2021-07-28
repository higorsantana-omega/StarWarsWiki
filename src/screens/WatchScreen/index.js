import React, { useMemo, useCallback, useState } from 'react'
import YoutubePlayer from 'react-native-youtube-iframe'
import { Container, GoBack } from '~/components'
import { useDataStore } from '~/services/stores'
import { theme } from '~/styles'

export const WatchScreen = () => {
  const [playing, setPlaying] = useState(true)
  const { selectedData } = useDataStore()

  const youtubeId = useMemo(() => {
    const id = selectedData.trailer_url.split('v=')[1].substring(0, 11)
    return id
  }, [selectedData])

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false)
    }
  }, [])

  return (
    <Container align="flex-start" justify="center">
      <YoutubePlayer
        height={theme.metrics.px(300)}
        width={theme.metrics.px(375)}
        play={playing}
        videoId={youtubeId}
        onChangeState={onStateChange}
      />
      <GoBack />
    </Container>
  )
}
