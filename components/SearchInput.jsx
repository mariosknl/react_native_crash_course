import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";

import { icons } from "../constants";
import { usePathname, router } from "expo-router";

const SearchInput = ({
  initialQuery = "",
}) => {
  const pathname = usePathname()
  const [query, setQuery] = useState(initialQuery || "")


  return (
    <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4">
      <TextInput
        value={query}
        onChangeText={(e) => setQuery(e)}
        placeholder="Search for a video topic"
        placeholderTextColor="#cdcde0"
        className="flex-1 text-white font-psemibold text-base mt-0.5"
      />

      <TouchableOpacity
        onPress={() => {
          if (!query) {
            return Alert.alert('Missing query', 'Please input something to search results across database')
          }

          if (pathname.startsWith('/search')) router.setParams({ query })
          else router.push(`/search/${query}`)
        }}
      >
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};
export default SearchInput;
