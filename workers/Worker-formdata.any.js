// META: global=!default,dedicatedworker
test(() => {
  assert_own_property(self, 'FormData');
  assert_equals(FormData.length, 0);

  var formData = new FormData();
  assert_not_equals(formData, null);
  assert_true(FormData.prototype.hasOwnProperty('append'));
  try {
    formData.append('key', 'value');
  } catch {
    assert_unreached('formData.append(\'key\', \'value\'); should not throw.');
  }

  var blob = new Blob([]);
  assert_not_equals(blob, null);
  try {
    formData.append('key', blob);
  } catch {
    assert_unreached('formData.append(\'key\', blob); threw: ' + ex);
  }
  try {
    formData.append('key', blob, 'filename');
  } catch (ex) {
    assert_unreached('formData.append(\'key\', blob, \'filename\'); threw: ' + ex);
  }

  assert_throws("DataCloneError",
                function() { postMessage(formData) },
                "Trying to clone formdata inside a postMessage results in an exception." );
},'Test FormData interface object');
