import {
    todayMessage,
    errorMessage,
    inputPlaceholder,
    searchText
  } from '../messages';
  
  describe('Constantes', () => {
    test('todayMessage debe contener el mensaje correcto', () => {
      expect(todayMessage).toEqual('Hoy es la luna!');
    });
  
    test('errorMessage debe contener el mensaje correcto', () => {
      expect(errorMessage).toEqual('Ingresa solo numeros hasta el 6986');
    });
  
    test('inputPlaceholder debe contener el mensaje correcto', () => {
      expect(inputPlaceholder).toEqual('Ingresa el dia actual');
    });
  
    test('searchText debe contener el mensaje correcto', () => {
      expect(searchText).toEqual('Buscar');
    });
  });