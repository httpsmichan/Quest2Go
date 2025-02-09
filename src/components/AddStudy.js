import React, { useState } from 'react';

export default function AddStudy() {
 
  const [authors, setAuthors] = useState(['']);
  const [keywords, setKeywords] = useState(['']);
  const [categories, setCategories] = useState(['']);

  const [references, setReferences] = useState([
    {
      articleTitle: '',
      authors: [''],
      journal: '',
      publicationYear: '',
      volumePageIssue: '',
      doi: '',
    },
  ]);

  const handleAuthorChange = (index, value) => {
    const newAuthors = [...authors];
    newAuthors[index] = value;
    setAuthors(newAuthors);
  };

  const handleAddAuthor = () => {
    setAuthors([...authors, '']);
  };

  const handleRemoveAuthor = (index) => {
    if (authors.length > 1) {
      setAuthors(authors.filter((_, i) => i !== index));
    }
  };

  const handleKeywordChange = (index, value) => {
    const newKeywords = [...keywords];
    newKeywords[index] = value;
    setKeywords(newKeywords);
  };

  const handleAddKeyword = () => {
    setKeywords([...keywords, '']);
  };

  const handleRemoveKeyword = (index) => {
    if (keywords.length > 1) {
      setKeywords(keywords.filter((_, i) => i !== index));
    }
  };

  const handleCategoryChange = (index, value) => {
    const newCategories = [...categories];
    newCategories[index] = value;
    setCategories(newCategories);
  };

  const handleAddCategory = () => {
    setCategories([...categories, '']);
  };

  const handleRemoveCategory = (index) => {
    if (categories.length > 1) {
      setCategories(categories.filter((_, i) => i !== index));
    }
  };

  const handleReferenceChange = (refIndex, field, value) => {
    const newReferences = [...references];
    newReferences[refIndex] = { ...newReferences[refIndex], [field]: value };
    setReferences(newReferences);
  };

  const handleReferenceAuthorChange = (refIndex, authorIndex, value) => {
    const newReferences = [...references];
    const ref = newReferences[refIndex];
    const newAuthors = [...ref.authors];
    newAuthors[authorIndex] = value;
    newReferences[refIndex] = { ...ref, authors: newAuthors };
    setReferences(newReferences);
  };

  const handleAddReferenceAuthor = (refIndex) => {
    const newReferences = [...references];
    const ref = newReferences[refIndex];
    newReferences[refIndex] = { ...ref, authors: [...ref.authors, ''] };
    setReferences(newReferences);
  };

  const handleRemoveReferenceAuthor = (refIndex, authorIndex) => {
    const newReferences = [...references];
    const ref = newReferences[refIndex];
    if (ref.authors.length > 1) {
      newReferences[refIndex] = {
        ...ref,
        authors: ref.authors.filter((_, i) => i !== authorIndex),
      };
      setReferences(newReferences);
    }
  };

  // Add a new reference object
  const handleAddReference = () => {
    setReferences([
      ...references,
      {
        articleTitle: '',
        authors: [''],
        journal: '',
        publicationYear: '',
        volumePageIssue: '',
        doi: '',
      },
    ]);
  };

  // Remove a reference (if more than one exists)
  const handleRemoveReference = (refIndex) => {
    if (references.length > 1) {
      setReferences(references.filter((_, i) => i !== refIndex));
    }
  };


  // Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      title: e.target.title.value,
      abstract: e.target.abstract.value,
      publicationDate: e.target.publicationDate.value,
      authors,
      keywords,
      yearOfCompletion: e.target.yearOfCompletion.value,
      degreeProgram: e.target.degreeProgram.value,
      categories,
      institution: e.target.institution.value,
      references,
    });
  };

  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900">Add New Research Study</h2>
      <div className="bg-white p-6 rounded-lg shadow-md mt-4">
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {/* Study Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Title"
              required
            />
          </div>

          {/* Abstract */}
          <div>
            <label htmlFor="abstract" className="block text-sm font-medium text-gray-700">
              Abstract
            </label>
            <textarea
              id="abstract"
              name="abstract"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Abstract"
              required
            />
          </div>

          {/* Publication Date */}
          <div>
            <label htmlFor="publicationDate" className="block text-sm font-medium text-gray-700">
              Publication Date
            </label>
            <input
              type="date"
              id="publicationDate"
              name="publicationDate"
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          {/* Authors */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Author/s</label>
            {authors.map((author, index) => (
              <div key={index} className="flex items-center mt-2">
                <input
                  type="text"
                  value={author}
                  onChange={(e) => handleAuthorChange(index, e.target.value)}
                  placeholder="Author"
                  className="w-full px-3 py-2 border rounded-md"
                />
                {authors.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveAuthor(index)}
                    className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
                    title="Remove author"
                  >
                    &minus;
                  </button>
                )}
                {index === authors.length - 1 && (
                  <button
                    type="button"
                    onClick={handleAddAuthor}
                    className="ml-2 bg-green-500 text-white px-3 py-2 rounded"
                    title="Add author"
                  >
                    +
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Keywords */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Keywords</label>
            {keywords.map((keyword, index) => (
              <div key={index} className="flex items-center mt-2">
                <input
                  type="text"
                  value={keyword}
                  onChange={(e) => handleKeywordChange(index, e.target.value)}
                  placeholder="Keyword"
                  className="w-full px-3 py-2 border rounded-md"
                />
                {keywords.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveKeyword(index)}
                    className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
                    title="Remove keyword"
                  >
                    &minus;
                  </button>
                )}
                {index === keywords.length - 1 && (
                  <button
                    type="button"
                    onClick={handleAddKeyword}
                    className="ml-2 bg-green-500 text-white px-3 py-2 rounded"
                    title="Add keyword"
                  >
                    +
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Year of Completion */}
          <div>
            <label htmlFor="yearOfCompletion" className="block text-sm font-medium text-gray-700">
              Year of Completion
            </label>
            <input
              type="number"
              id="yearOfCompletion"
              name="yearOfCompletion"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="e.g. 2024"
              required
            />
          </div>

          {/* Degree Program */}
          <div>
            <label htmlFor="degreeProgram" className="block text-sm font-medium text-gray-700">
              Degree Program
            </label>
            <input
              type="text"
              id="degreeProgram"
              name="degreeProgram"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Degree Program"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            {categories.map((cat, index) => (
              <div key={index} className="flex items-center mt-2">
                <input
                  type="text"
                  value={cat}
                  onChange={(e) => handleCategoryChange(index, e.target.value)}
                  placeholder="Category"
                  className="w-full px-3 py-2 border rounded-md"
                />
                {categories.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveCategory(index)}
                    className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
                    title="Remove category"
                  >
                    &minus;
                  </button>
                )}
                {index === categories.length - 1 && (
                  <button
                    type="button"
                    onClick={handleAddCategory}
                    className="ml-2 bg-green-500 text-white px-3 py-2 rounded"
                    title="Add category"
                  >
                    +
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Institution */}
          <div>
            <label htmlFor="institution" className="block text-sm font-medium text-gray-700">
              Institution
            </label>
            <input
              type="text"
              id="institution"
              name="institution"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Institution"
              required
            />
          </div>

          <hr className="my-6 border-t border-gray-300" />

          {/* References Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-900">References</h3>
            {references.map((ref, refIndex) => (
              <div key={refIndex} className="border p-4 rounded-md mt-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-semibold">Reference {refIndex + 1}</h4>
                  {references.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveReference(refIndex)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                      title="Remove reference"
                    >
                      &minus;
                    </button>
                  )}
                </div>

                {/* Article Title */}
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Article Title
                  </label>
                  <input
                    type="text"
                    value={ref.articleTitle}
                    onChange={(e) =>
                      handleReferenceChange(refIndex, 'articleTitle', e.target.value)
                    }
                    placeholder="Article Title"
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>

                {/* Reference Authors */}
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Reference Authors
                  </label>
                  {ref.authors.map((author, authorIndex) => (
                    <div key={authorIndex} className="flex items-center mt-2">
                      <input
                        type="text"
                        value={author}
                        onChange={(e) =>
                          handleReferenceAuthorChange(refIndex, authorIndex, e.target.value)
                        }
                        placeholder="Author"
                        className="w-full px-3 py-2 border rounded-md"
                      />
                      {ref.authors.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveReferenceAuthor(refIndex, authorIndex)}
                          className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
                          title="Remove author"
                        >
                          &minus;
                        </button>
                      )}
                      {authorIndex === ref.authors.length - 1 && (
                        <button
                          type="button"
                          onClick={() => handleAddReferenceAuthor(refIndex)}
                          className="ml-2 bg-green-500 text-white px-3 py-2 rounded"
                          title="Add author"
                        >
                          +
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {/* Journal or Publication Name */}
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Journal or Publication Name
                  </label>
                  <input
                    type="text"
                    value={ref.journal}
                    onChange={(e) =>
                      handleReferenceChange(refIndex, 'journal', e.target.value)
                    }
                    placeholder="Journal or Publication Name"
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>

                {/* Publication Year */}
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Publication Year
                  </label>
                  <input
                    type="number"
                    value={ref.publicationYear}
                    onChange={(e) =>
                      handleReferenceChange(refIndex, 'publicationYear', e.target.value)
                    }
                    placeholder="Publication Year"
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>

                {/* Volume/Page/Issue */}
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Volume/Page/Issue
                  </label>
                  <input
                    type="text"
                    value={ref.volumePageIssue}
                    onChange={(e) =>
                      handleReferenceChange(refIndex, 'volumePageIssue', e.target.value)
                    }
                    placeholder="Volume/Page/Issue"
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>

                {/* DOI */}
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">
                    DOI (Digital Object Identifier)
                  </label>
                  <input
                    type="text"
                    value={ref.doi}
                    onChange={(e) =>
                      handleReferenceChange(refIndex, 'doi', e.target.value)
                    }
                    placeholder="DOI"
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
              </div>
            ))}

            {/* Button to add a new reference */}
            <div className="mt-4">
              <button
                type="button"
                onClick={handleAddReference}
                className="bg-green-500 text-white px-4 py-2 rounded"
                title="Add Reference"
              >
                Add Reference
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-4">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Save Study
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
