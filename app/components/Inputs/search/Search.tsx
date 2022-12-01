import { ForwardedRef, useState } from 'react';
import React from 'react';
import styles from './styles.css';
import { useMovieDataStore } from '~/store/data';

export const links = () => [{ rel: 'stylesheet', href: styles }];

type SearchInputProps = {
  children?: React.ReactNode;
  id?: string;
  searchFiled: string;
  setSearchField: (active: string) => void;
};

export const SearchInput = React.forwardRef(
  ({ children, ...props }: SearchInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    //
    const { searchFiled, setSearchField } = props;

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
      setSearchField(e.currentTarget.value);
    };

    return (
      <label className="search_container" htmlFor={props.id}>
        <svg
          className="search_icon"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.08 17.2L23.6133 21.72C23.8657 21.9704 24.0077 22.3111 24.0077 22.6667C24.0077 23.0222 23.8657 23.363 23.6133 23.6133C23.363 23.8657 23.0222 24.0077 22.6667 24.0077C22.3111 24.0077 21.9704 23.8657 21.72 23.6133L17.2 19.08C15.3366 20.5426 13.0355 21.3363 10.6667 21.3333C4.77563 21.3333 0 16.5577 0 10.6667C0 4.77563 4.77563 0 10.6667 0C16.5577 0 21.3333 4.77563 21.3333 10.6667C21.3363 13.0355 20.5426 15.3366 19.08 17.2ZM10.6667 2.66667C6.24839 2.66667 2.66667 6.24839 2.66667 10.6667C2.66667 15.0849 6.24839 18.6667 10.6667 18.6667C15.0849 18.6667 18.6667 15.0849 18.6667 10.6667C18.6667 6.24839 15.0849 2.66667 10.6667 2.66667Z"
            fill="white"
          />
        </svg>

        <input
          id={props.id}
          className="search_input medium_heading"
          type="search"
          {...props}
          ref={ref}
          data-search-input
          placeholder="Search for movies or TV series"
          onChange={handleChange}
        />
      </label>
    );
  },
);
SearchInput.displayName = 'Search Input';
