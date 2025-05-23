// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

import (
	"errors"
	"fmt"
	"mockserver/internal/sdk/utils"
)

type CustomFieldValueType string

const (
	CustomFieldValueTypeCustomFieldValueStr       CustomFieldValueType = "CustomFieldValueStr"
	CustomFieldValueTypeCustomFieldValueHyperlink CustomFieldValueType = "CustomFieldValueHyperlink"
	CustomFieldValueTypeCustomFieldValuePerson    CustomFieldValueType = "CustomFieldValuePerson"
)

type CustomFieldValue struct {
	CustomFieldValueStr       *CustomFieldValueStr
	CustomFieldValueHyperlink *CustomFieldValueHyperlink
	CustomFieldValuePerson    *CustomFieldValuePerson

	Type CustomFieldValueType
}

func CreateCustomFieldValueCustomFieldValueStr(customFieldValueStr CustomFieldValueStr) CustomFieldValue {
	typ := CustomFieldValueTypeCustomFieldValueStr

	return CustomFieldValue{
		CustomFieldValueStr: &customFieldValueStr,
		Type:                typ,
	}
}

func CreateCustomFieldValueCustomFieldValueHyperlink(customFieldValueHyperlink CustomFieldValueHyperlink) CustomFieldValue {
	typ := CustomFieldValueTypeCustomFieldValueHyperlink

	return CustomFieldValue{
		CustomFieldValueHyperlink: &customFieldValueHyperlink,
		Type:                      typ,
	}
}

func CreateCustomFieldValueCustomFieldValuePerson(customFieldValuePerson CustomFieldValuePerson) CustomFieldValue {
	typ := CustomFieldValueTypeCustomFieldValuePerson

	return CustomFieldValue{
		CustomFieldValuePerson: &customFieldValuePerson,
		Type:                   typ,
	}
}

func (u *CustomFieldValue) UnmarshalJSON(data []byte) error {

	var customFieldValueStr CustomFieldValueStr = CustomFieldValueStr{}
	if err := utils.UnmarshalJSON(data, &customFieldValueStr, "", true, true); err == nil {
		u.CustomFieldValueStr = &customFieldValueStr
		u.Type = CustomFieldValueTypeCustomFieldValueStr
		return nil
	}

	var customFieldValuePerson CustomFieldValuePerson = CustomFieldValuePerson{}
	if err := utils.UnmarshalJSON(data, &customFieldValuePerson, "", true, true); err == nil {
		u.CustomFieldValuePerson = &customFieldValuePerson
		u.Type = CustomFieldValueTypeCustomFieldValuePerson
		return nil
	}

	var customFieldValueHyperlink CustomFieldValueHyperlink = CustomFieldValueHyperlink{}
	if err := utils.UnmarshalJSON(data, &customFieldValueHyperlink, "", true, true); err == nil {
		u.CustomFieldValueHyperlink = &customFieldValueHyperlink
		u.Type = CustomFieldValueTypeCustomFieldValueHyperlink
		return nil
	}

	return fmt.Errorf("could not unmarshal `%s` into any supported union types for CustomFieldValue", string(data))
}

func (u CustomFieldValue) MarshalJSON() ([]byte, error) {
	if u.CustomFieldValueStr != nil {
		return utils.MarshalJSON(u.CustomFieldValueStr, "", true)
	}

	if u.CustomFieldValueHyperlink != nil {
		return utils.MarshalJSON(u.CustomFieldValueHyperlink, "", true)
	}

	if u.CustomFieldValuePerson != nil {
		return utils.MarshalJSON(u.CustomFieldValuePerson, "", true)
	}

	return nil, errors.New("could not marshal union type CustomFieldValue: all fields are null")
}
