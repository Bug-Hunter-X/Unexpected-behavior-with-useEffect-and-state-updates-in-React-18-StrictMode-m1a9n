```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause an error in StrictMode because it's a side effect
    console.log('Component mounted!'); //This will cause error in strict mode
    return () => {
      console.log('Component unmounted!');
    };
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```