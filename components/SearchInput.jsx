import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import { icons } from "../constants";

const SearchInput = ({
	title,
	value,
	handleChangeText,
	placeholder,
	otherStyles,
	...props
}) => {
	const [showPassword, setShowPassword] = useState(false);
	return (
		<View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4">
			<TextInput
				value={value}
				onChangeText={handleChangeText}
				placeholder="Search for a video topic"
				placeholderTextColor="#7b7b8b"
				className="flex-1 text-white font-psemibold text-base mt-0.5"
				secureTextEntry={title === "Password" && !showPassword}
				{...props}
			/>

			<TouchableOpacity>
				<Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
			</TouchableOpacity>
		</View>
	);
};
export default SearchInput;
