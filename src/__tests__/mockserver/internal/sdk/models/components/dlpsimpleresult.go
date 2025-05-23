// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

import (
	"encoding/json"
	"fmt"
)

type DlpSimpleResult string

const (
	DlpSimpleResultSuccess DlpSimpleResult = "SUCCESS"
	DlpSimpleResultFailure DlpSimpleResult = "FAILURE"
)

func (e DlpSimpleResult) ToPointer() *DlpSimpleResult {
	return &e
}
func (e *DlpSimpleResult) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "SUCCESS":
		fallthrough
	case "FAILURE":
		*e = DlpSimpleResult(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DlpSimpleResult: %v", v)
	}
}
