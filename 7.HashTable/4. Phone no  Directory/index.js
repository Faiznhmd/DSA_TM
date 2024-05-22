function phoneNoDirectory(PhoneNumbers) {
  const directory = new Map();

  for (const entry of PhoneNumbers) {
    const [name, PhoneNumbers] = entry.split(' ');
    directory.set(name, PhoneNumbers);
  }
  return directory;
}
