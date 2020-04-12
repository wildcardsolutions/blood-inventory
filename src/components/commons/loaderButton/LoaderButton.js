/**
 * file     : LoaderButton.js
 * author   : apagadorjr
 */
import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./LoaderButton.css";

/**
 * 
 */
export default ({
  isLoading,
  text,
  loadingText,
  className = "",
  disabled = false,
  ...props
}) =>
  <Button
    className={`LoaderButton ${className}`}
    disabled={disabled || isLoading}
    {...props}
  >
    {isLoading && <FontAwesomeIcon icon={faSpinner} className="spinning" />}
    {!isLoading ? text : loadingText}
  </Button>;
