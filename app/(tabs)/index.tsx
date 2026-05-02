import { View, Text, StyleSheet, Image } from 'react-native';

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>TechGears Store</Text>
        <Text style={styles.subTitle}>Smart Tech Dashboard</Text>
      </View>

      {/* GRID */}
      <View style={styles.gridContainer}>
        
        <View style={styles.row}>
          {/* SYSTEM */}
          <View style={[styles.box, { backgroundColor: '#00bcd4' }]}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2099/2099058.png' }}
              style={styles.icon}
            />
            <Text style={styles.statusOff}>OFF</Text>
            <Text style={styles.boxText}>System</Text>
          </View>

          {/* DEVICE HEALTH */}
          <View style={[styles.box, { backgroundColor: '#4caf50' }]}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3524/3524659.png' }}
              style={styles.icon}
            />
            <Text style={styles.boxText}>Device Health</Text>
          </View>
        </View>

        <View style={styles.row}>
          {/* ORDERS */}
          <View style={[styles.box, { backgroundColor: '#ff7043' }]}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3144/3144456.png' }}
              style={styles.icon}
            />
            <Text style={styles.boxText}>Orders</Text>
          </View>

          {/* SETTINGS */}
          <View style={[styles.box, { backgroundColor: '#7e57c2' }]}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2099/2099058.png' }}
              style={styles.icon}
            />
            <Text style={styles.boxText}>Settings</Text>
          </View>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },

  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#1e293b',
  },

  headerTitle: {
    color: '#38bdf8',
    fontSize: 26,
    fontWeight: 'bold',
  },

  subTitle: {
    color: '#94a3b8',
    fontSize: 12,
    marginTop: 4,
  },

  gridContainer: {
    flex: 4,
    padding: 20,
    justifyContent: 'space-around',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  box: {
    width: '45%',
    height: 160,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },

  icon: {
    width: 55,
    height: 55,
    marginBottom: 10,
    tintColor: '#fff',
  },

  boxText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },

  statusOff: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#ff3b3b',
    color: '#fff',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 5,
    fontSize: 10,
    fontWeight: 'bold',
  },

  footer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },

  footerText: {
    color: '#38bdf8',
    fontSize: 12,
  },
});