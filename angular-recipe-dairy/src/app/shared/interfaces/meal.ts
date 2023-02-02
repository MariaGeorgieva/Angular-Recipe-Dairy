export interface Meal {
  value: string;
  viewValue: string;
}
export const meals: Meal[] = [
  { value: 'breakfast', viewValue: 'Breakfast' },
  { value: 'lunch', viewValue: 'Lunch' },
  { value: 'Dinner', viewValue: 'Dinner' },
  { value: 'drinks', viewValue: 'Drinks' },
  { value: 'special-occasion', viewValue: 'Special occasion' },
  { value: 'other', viewValue: 'Other' },
];
