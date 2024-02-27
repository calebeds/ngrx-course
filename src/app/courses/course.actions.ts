import { createAction, props } from "@ngrx/store";
import { Course } from "./model/course";
import { Update } from "@ngrx/entity";

export const courseUpdated = createAction(
  "[Edit Course Dialog] Course Updated",
  props<{ update: Update<Course> }>()
);
