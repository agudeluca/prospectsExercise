import { StyleSheet } from 'react-native';

const layouts = StyleSheet.create({
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerHorizontal: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
  },
  horizontalContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  leftAlign: {
    alignItems: 'flex-start',
  },
  over: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});

export default layouts;
