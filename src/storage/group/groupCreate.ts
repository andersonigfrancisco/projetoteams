import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from '@utils/AppError';
import {GROUP_COLLECTION} from '@storage/storageConfig'
import { groupsGetAll } from "./groupsGetAll";

export async function  groupCreate(newGroup: string) {
  try {
    const storedGroups = await groupsGetAll();

    const groupAlreadyExists = storedGroups.includes(newGroup);

    if(groupAlreadyExists) {
      throw new AppError('Já existe um grupo cadastrado com esse nome.')
    }
    await AsyncStorage.setItem(GROUP_COLLECTION,JSON.stringify([...storedGroups,newGroup]))

  } catch (error) {
    throw error;
  }
}