export class UserAdapter {
  static transformUserToSearched(data: any[]): any[] {
    return data.map((el) => ({
      ...el,
      label: el.userName,
      path: `chat/${el.id}`,
    }));
  }
}
